import React from "react"
import {View, Text, Button} from "react-native";
import * as firebase from "firebase";

export default function userLogged() {
   return(
       <View>
           <Text>User logged..</Text>
           <Button title="cerrar sesion" onPress={()=> firebase.auth().signOut()} />
       </View>
   )
}