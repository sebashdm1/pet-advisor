import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();


const  MockedNavigation = ({component,params = {}}) => {


    return(
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
                name="MockedScreen"
                component = { component }
                initialParams={ params }
                
                />
        </Tab.Navigator>
    </NavigationContainer>
    );

};

export default MockedNavigation;
    