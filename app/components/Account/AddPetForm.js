import React, {useState, useEffect} from 'react'
import {StyleSheet, ScrollView, Alert, Dimensions} from 'react-native'
import {Input, Icon, Button} from 'react-native-elements'
import Loading from '../Loading'
import {firebaseApp} from '../../utils/firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
const db = firebase.firestore(firebaseApp)
import {
  calculateDogAge,
  calculateCatAge,
} from '../../business-rules/AgeConverter'

export default function AddPetForm(props) {
  const {toastRef, age, setAge, navigation} = props
  const [isLoading, setIsLoading] = useState(false)
  const [breed, setBreed] = useState('')
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [type, setType] = useState('')
  let resultAge

  const [formErrors, setFormErrors] = useState({
    breed: '',
    name: '',
    age: '',
    weight: '',
  })
  const handleAgeChange = e => {
    e.preventDefault()
    setAge(e.nativeEvent.text)
  }

  const handleSubmit = e => {
    if (!breed) {
      setFormErrors(prevState => ({
        ...prevState,
        breed: 'La raza es requerida',
      }))
    }
    if (!name) {
      setFormErrors(prevState => ({
        ...prevState,
        name: 'El nombre es requerida',
      }))
    }
    if (!age) {
      setFormErrors(prevState => ({...prevState, age: 'La edad es requerida'}))
    }
    if (!weight) {
      setFormErrors(prevState => ({
        ...prevState,
        weight: 'El peso es requerida',
      }))
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <Input
        id="breed"
        testID="pet-breed"
        label="Raza"
        errorMessage={formErrors.breed}
        containerStyle={styles.input}
        rightIcon={<Icon type="material-community" name="dog-side" />}
        onChange={e => setBreed(e.nativeEvent.text)}
      />
      <Input
        id="breed"
        testID="pet-name"
        label="Nombre de la mascota"
        errorMessage={formErrors.name}
        rightIcon={<Icon type="material-community" name="lead-pencil" />}
        onChange={e => setName(e.nativeEvent.text)}
      />
      <Input
        id="breed"
        testID="pet-age"
        label="edad mascota"
        errorMessage={formErrors.age}
        rightIcon={<Icon type="material-community" name="counter" />}
        onChange={e => handleAgeChange(e)}
      />
      <Input
        id="breed"
        testID="pet-weight"
        label="peso de mascota"
        errorMessage={formErrors.weight}
        rightIcon={<Icon type="material-community" name="weight" />}
        onChange={e => setWeight(e.nativeEvent.text)}
      />
      <Button
        testID="button"
        title="Agregar Mascota"
        onPress={handleSubmit}
        buttonStyle={styles.btnAddPet}
      />
    </ScrollView>
  )
}

const isDogOrCat = (type, age) => {
  return type === 'dog' ? calculateDogAge(+age, 2) : calculateCatAge(+age)
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
