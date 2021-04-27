import React from "react"
import {createStackNavigator} from "@react-navigation/stack";
import PetPlaces from "../screens/PetPlaces";

const Stack = createStackNavigator();

export default function PlacesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="pet-places"
                component={PetPlaces}
                options={{title: "Pet lugares"}}
            />
        </Stack.Navigator>
    )
}
