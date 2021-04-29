import React from "react"
import { StyleSheet, ScrollView, View, Image } from "react-native";
import { Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

export default function userGuest() {
    const navigation = useNavigation();

   return(
       <ScrollView centerContent={true} style={styles.viewBody}>
           <Image
               source={require("../../../assets/img/user-guest.png")}
               resizeMede="contain"
               style={styles.image}
           /> 
           <View style={styles.viewBtn}>
            <Button 
                title="Ingresar"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer} 
                onPress={() => navigation.navigate("login")}
            />
          </View>   
       </ScrollView>
   );
}

const styles = StyleSheet.create({
  viewBody: {
      backgroundColor: "#070707"
  },
  image: {
      height: 400,
      width: "100%",
      marginBottom: 40,
  },
  viewBtn:{
      flex: 1,
      alignItems: "center"
  },
  btnContainer: {
      width: "50%",
      marginTop: 20,
  },
  btnStyle: {
      backgroundColor: "#19AFFF"
  }

})