import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import TopPlaces from "../screens/TopPlaces"

const Stack = createStackNavigator();

export default function TopPlacesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
               name = "top-places"
               component = {TopPlaces}
               options = {{title: "Top pet lugares"}}
            />
        </Stack.Navigator>
    )
}