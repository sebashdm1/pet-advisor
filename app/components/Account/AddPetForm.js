import React, {useState, useEffect} from 'react'
import {StyleSheet, ScrollView, Alert, Dimensions} from 'react-native'
import {Input, Icon, Button} from 'react-native-elements'
import Loading from '../Loading'
import {firebaseApp} from '../../utils/firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {calculateDogAge} from '../../business-rules/AgeConverter'
const db = firebase.firestore(firebaseApp)

export default function AddPetForm(props) {
  const {toastRef} = props
  const [isLoading, setIsLoading] = useState(false)
  const [breed, setBreed] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [humanAge, setHumanAge] = useState('')
  const [weight, setWeight] = useState('')
  const [Type, setType] = useState('')

  const addPet = () => {
    setIsLoading(true)
    firebase
      .database()
      .ref('pets/')
      .set({
        breed: breed,
        petName: name,
        petAge: age,
        humanAge: humanAge,
        petWeight: weight,
        createAt: new Date(),
      })
      .then(() => {
        console.log('ok')
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        console.log(error)
        toastRef.current.show('Error al registrar mascota')
      })
  }

  useEffect(() => {
    setHumanAge(calculateDogAge(age, 2))
  }, [age])

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
        onChange={e => {
          setAge(e.nativeEvent.text)
        }}
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
