import React, {useRef} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Toast from 'react-native-easy-toast'
import AddPetForm from '../../components/Account/AddPetForm'

export default function RegisterPet() {
  const toastRef = useRef()

  return (
    <KeyboardAwareScrollView>
      <Image
        testID="image-01"
        source={{uri: '../../../assets/img/pet-advisor-logo.png'}}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <AddPetForm toastRef={toastRef} />
      </View>
      <Toast
        testID="toast-register"
        ref={toastRef}
        position="center"
        opacity={0.9}
      />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
})
