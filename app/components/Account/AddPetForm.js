import React, {useState, useEffect} from 'react'
import {StyleSheet, ScrollView, Alert, Dimensions} from 'react-native'
import {Input, Icon, Button} from 'react-native-elements'
import Loading from '../Loading'
import {firebaseApp} from '../../utils/firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
const db = firebase.firestore(firebaseApp)
import {calculateDogAge} from '../../business-rules/AgeConverter'

export default function AddPetForm(props) {
  const {toastRef, age, setAge, navigation} = props
  const [isLoading, setIsLoading] = useState(false)
  const [breed, setBreed] = useState('')
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [Type, setType] = useState('')
  let resultAge

  const handleAgeChange = e => {
    e.preventDefault()
    setAge(e.nativeEvent.text)
  }
  const addPet = () => {
    resultAge = calculateDogAge(+age, 2)
    setIsLoading(true)
    db.collection('pets')
      .add({
        type: '',
        size: '',
        breed: breed,
        petName: name,
        petAge: age,
        humanAge: resultAge,
        petWeight: weight,
        createAt: new Date(),
      })
      .then(() => {
        console.log('ok')
        setIsLoading(false)
        navigation.navigate('account')
      })
      .catch(error => {
        setIsLoading(false)
        console.log(error)
        toastRef.current.show('Error al registrar mascota')
      })
  }

  return (
    <ScrollView style={styles.scrollView}>
      <Input
        testID="pet-breed"
        label="Raza"
        containerStyle={styles.input}
        rightIcon={<Icon type="material-community" name="dog-side" />}
        onChange={e => setBreed(e.nativeEvent.text)}
      />
      <Input
        testID="pet-name"
        label="Nombre de la mascota"
        rightIcon={<Icon type="material-community" name="lead-pencil" />}
        onChange={e => setName(e.nativeEvent.text)}
      />
      <Input
        testID="pet-age"
        label="edad mascota"
        rightIcon={<Icon type="material-community" name="counter" />}
        onChange={e => handleAgeChange(e)}
      />
      <Input
        testID="pet-weight"
        label="peso de mascota"
        rightIcon={<Icon type="material-community" name="weight" />}
        onChange={e => setWeight(e.nativeEvent.text)}
      />
      <Button
        testID="button"
        title="Agregar Mascota"
        onPress={addPet}
        buttonStyle={styles.btnAddPet}
      />
      <Loading isVisible={isLoading} text="Guardando patitas" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnAddPet: {
    backgroundColor: '#19AFFF',
    margin: 20,
  },
})
