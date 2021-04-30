import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import PlacesStack from "../navigation/PlacesStack"
import FavoritesStack from "../navigation/FavoritesStack";
import TopPlacesStack from "../navigation/TopplacesStack";
import SearchStack from "../navigation/SearchStack";
import AccountSatck from "../navigation/AccountStack";

const Tab = createBottomTabNavigator();


function screenOptions(route, color) {
    let iconName;

    switch(route.name) {
        case "pet-places" :
            iconName = "city"
            break;
        case "favorites" :
            iconName = "paw"
            break;
        case "top-places" :
            iconName = "bone"
            break;
        case "search" :
            iconName = "map-search"
            break;
        case "account" :
            iconName = "dog"
            break;
        default:
            break;    
    }
    return(
        <Icon 
           type = "material-community"
           name = {iconName}
           size = {22}
           color = {color}
         />  

    )
}


export default function Navigation(){
    return(
        <NavigationContainer>
        <Tab.Navigator
            initialRouteName = "pet-places"
            tabBarOptions = {{
                inactiveTintColor: "#646464",
                activeTintColor: "#19AFFF"
            }}
            screenOptions = { ({ route }) => ({
                tabBarIcon: ({color}) =>  screenOptions(route, color)
            })}
        >
            <Tab.Screen 
                name = "pet-places" 
                component = {PlacesStack}
                options = {{title: "Lugares"}} 
                />
            <Tab.Screen 
                name = "favorites" 
                component = {FavoritesStack} 
                options = {{title: "Favoritos"}}
                />
            <Tab.Screen 
                name = "top-places"
                component = {TopPlacesStack}
                options = {{title: "Top Lugares"}}
            />
            <Tab.Screen 
                name = "search"
                component = {SearchStack}
                options = {{title: "Buscar"}}
            />
            <Tab.Screen 
                name = "account"
                component = {AccountSatck}
                options = {{title: "Mi Cuenta"}}
            />        
        </Tab.Navigator>
    </NavigationContainer>

    )
}