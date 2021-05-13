import React, {useState} from "react"
import { View, StyleSheet } from "react-native"
import { Input, Icon, Button} from "react-native-elements"
import { validateEmail } from "../../utils/validations"
import Loading from "../Loading"
import { size, isEmpty } from "lodash"
import * as firebase from "firebase"
import { useNavigation } from "@react-navigation/native"



export default function RegisterForm(props) {
    const { toastRef } = props
    const [showPassword, setShowPassword] = useState(false)
    const [showCheckPassword, setShowCheckPassword] = useState(false)
    const [data, setData] = useState(formData())
    const [isVisible, setIsVisible] = useState(false)
    const navigation = useNavigation()

    const onSubmit = ()=> {
        console.log(data)
        if(
            isEmpty(data.email) || 
            isEmpty(data.password) || 
            isEmpty(data.repeatPassword))
           {
                 toastRef.current.show("Todos los campos son obligatorios");
          } else if(!validateEmail(data.email)){
                 toastRef.current.show("Email no es correcto");
          } else if(data.password !== data.repeatPassword){
                 toastRef.current.show("Las contraseñas no son iguales");
          } else if(size(data.password ) < 6){
                 toastRef.current.show("La contraseña no debe ser menor a 6 caracteres");
          }
          else{
              setIsVisible(true);
              firebase.auth()
              .createUserWithEmailAndPassword(data.email, data.password)
              .then((reponse)=>{
                navigation.navigate("account")
                setIsVisible(false)
              })
              .catch((err)=>{
                setIsVisible(false)
                toastRef.current.show("Email ingresado ya esta en uso");
              })
          }
    };

    const onChange = (e, type) =>{
        setData({ ...data, [type]: e.nativeEvent.text });
    }

    function formData() {
        return{
            email: "",
            password: "",
            repeatPassword: ""
        }
    }

    return(
        <View style={styles.formContainer}>
           <Input
              testID="email" 
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
              testID="password"
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
           <Input 
              testID="repeat-password"
              containerStyle={styles.inputForm}
              password={true}
              onChange={(e) => onChange(e, "repeatPassword")}
              secureTextEntry={showCheckPassword ? false : true}
              label="Confirmar contraseña"
              rightIcon={
                <Icon 
                   type="material-community"
                   name={showCheckPassword ? "eye-off" : "eye"}
                   onPress={() => setShowCheckPassword(!showCheckPassword)}
                />
            }
           />
           <Button
              testID="button"
              title="Registrarse"
              containerStyle={styles.btnContainerStyle} 
              buttonStyle={styles.btnStyle}
              onPress={onSubmit}
           />
           <Loading isVisible={isVisible} text="Alistanto patitas" />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
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

