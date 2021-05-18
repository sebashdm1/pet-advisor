import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Account from '../screens/Account/Account'
import Login from '../screens/Account/Login'
import Register from '../screens/Account/Register'

const Stack = createStackNavigator()

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{title: 'Mi PeTfil'}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{title: 'Comenzar aventura'}}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{title: 'Registro'}}
      />
      <Stack.Screen
        name="add-pet"
        component={Register}
        options={{title: 'Agregar Mascota'}}
      />
    </Stack.Navigator>
  )
}
