import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import PlacesStack from "../navigation/PlacesStack"
import FavoritesStack from "../navigation/FavoritesStack";
import TopPlacesStack from "../navigation/TopplacesStack";
import SearchStack from "../navigation/SearchStack";
import AccountSatck from "../navigation/AccountStack";


const Tab = createBottomTabNavigator();


export default function Navigation(){
    return(
        <NavigationContainer>
        <Tab.Navigator>
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