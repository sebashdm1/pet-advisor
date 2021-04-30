import React, { useRef } from "react";
import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import { Divider } from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import LoginForm from "../../components/Account/LoginForm"
import Toast from "react-native-easy-toast"



function CreateAccount(){
    const navigation = useNavigation();

    return(
        <Text style={styles.textRegister}>
            No tienes una cuenta?{" "}
            <Text 
                style={styles.btnRegister}
                onPress={() => navigation.navigate("register")}
            >
                Registrate Aqui.
            </Text>
        </Text>
    )
}



export default function Login() {
    const toastRef = useRef();
     
    return(
        <ScrollView>
            <Image 
               source={require("../../../assets/img/pet-advisor-logo.png")}
               resizeMode="contain"
               style={styles.logo}
            />
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef}/>
                <CreateAccount />
            </View>
            <Divider style={styles.divider} />
            <Text>Social lOGIN</Text>
            <Toast ref={toastRef} 
                 position="center" 
                 opacity={0.9}
            />
            
        </ScrollView>
    );
}


const styles =StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20
},
viewContainer: {
    marginRight: 40,
    marginLeft: 40
},
textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
},
btnRegister: {
    fontWeight: "bold",
    color: "#19AFFF"
},
divider: {
    backgroundColor: "#19AFFF",
    margin: 40,
}

});