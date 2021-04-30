import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { Input, Button, Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import * as firebase from "firebase"
import { validateEmail } from "../../utils/validations"
import { isEmpty } from "lodash"
import Loading from "../Loading"


export default function LoginForm(props) {
    const { toastRef } = props;
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState(formData())
    const navigation = useNavigation()
    const [loadingIsVisible, setLoadingIsVisible] = useState(false)

    const onChange = (e, type) =>{
        setData({ ...data, [type]: e.nativeEvent.text });
    }


    const onSubmit = () =>{
        if(
            isEmpty(data.email) || isEmpty(data.password)
        ) {
            toastRef.current.show("Todos los campos son obligatorios");
       } else if(!validateEmail(data.email)){
            toastRef.current.show("Email no es correcto");
       } else {
           setLoadingIsVisible(true)
          firebase
          .auth()
          .signInWithEmailAndPassword(data.email, data.password)
          .then(() =>{
            setLoadingIsVisible(false)
            navigation.navigate("account")
          })
          .catch( () => {
            setLoadingIsVisible(false)
            toastRef.current.show("Email o contrasena son incorrectos");
          })
       } 
   }

    
    function formData() {
        return{
            email: "",
            password: "",
        }
    }
    
    return(
        <View style={styles.formContainer}>
            <Input 
              label="Email"
              containerStyle={styles.inputForm}
              onChange={(e) => onChange(e, "email")}
              rightIcon={
                  <Icon 
                     type="material-community"
                     name="email"
                  />
              }
           />
           <Input 
              containerStyle={styles.inputForm}
              password={true}
              onChange={(e) => onChange(e, "password")}
              secureTextEntry={showPassword ? false : true}
              label="Contraseña"
              rightIcon={
                <Icon 
                   type="material-community"
                   name={showPassword ? "eye-off" : "eye"}
                   onPress={() => setShowPassword(!showPassword)}
                />
            }
           />

           <Button
              title="Iniciar aventura"
              containerStyle={styles.btnContainerStyle} 
              buttonStyle={styles.btnStyle}
              onPress={onSubmit}
           />
           <Loading isVisible={loadingIsVisible} text="Iniciando" />
        </View>
    )
}

const styles = StyleSheet.create({

    formContainer: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
         marginTop: 30
    },
    inputForm: {
        width: "100%",
        marginTop: 10,
    },
    btnContainerStyle: {
        marginTop: 20,
        width: "95%"
    },
    btnStyle: {
        backgroundColor: "#19AFFF"
    },

})
