import React, {useState, useEffect} from 'react'
import {StyleSheet, ScrollView, Alert, Dimensions} from 'react-native'
import {addDocument} from '../../services/service'
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
  const {toastRef, navigation} = props
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState(defaultFormValues())
  const [errorBreed, setErrorBreed] = useState(null)
  const [errorName, setErrorName] = useState(null)
  const [errorAge, setErrorAge] = useState(null)
  const [errorWeigth, setErrorWeight] = useState(null)
  let resultAge

  const handleChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text})
  }

  const clearErros = () => {
    setErrorBreed('')
    setErrorName('')
    setErrorAge('')
    setErrorWeight('')
  }

  const validateData = () => {
    clearErros()
    let isValid = true
    if (formData.breed == '') {
      setErrorBreed('La raza es requerida')
      isValid = false
    }
    if (formData.name == '') {
      setErrorName('El nombre es requerido')
      isValid = false
    }
    if (formData.age == '') {
      setErrorAge('La edad es requerida')
      isValid = false
    }
    if (formData.weight == '') {
      setErrorWeight('El peso es requerido')
      isValid = false
    }
    return isValid
  }

  const handleSubmit = () => {
    if (!validateData()) {
      return
    }
    resultAge = isDogOrCat(formData.type, formData.age)
    setIsLoading(true)
    const pet = {
      type: 'cat',
      breed: formData.breed,
      petName: formData.name,
      petAge: formData.age,
      humanAge: resultAge,
      petWeight: formData.weight,
      createAt: new Date(),
    }
    console.log(pet)
    addDocument('pets', pet, db)
      .then(() => {
        setIsLoading(false)
        navigation.navigate('account')
      })
      .catch(() => {
        setIsLoading(false)
        toastRef.current.show('Error al registrar mascota', 300)
      })
  }

  return (
    <ScrollView style={styles.scrollView}>
      <Input
        id="breed"
        testID="pet-breed"
        label="Raza"
        errorMessage={errorBreed}
        defaultValue={formData.breed}
        containerStyle={styles.input}
        rightIcon={<Icon type="material-community" name="dog-side" />}
        onChange={e => handleChange(e, 'breed')}
      />
      <Input
        id="name"
        testID="pet-name"
        label="Raza"
        errorMessage={errorName}
        label="Nombre de la mascota"
        rightIcon={<Icon type="material-community" name="lead-pencil" />}
        onChange={e => handleChange(e, 'name')}
      />
      <Input
        id="age"
        testID="pet-age"
        label="Raza"
        errorMessage={errorAge}
        label="edad mascota"
        rightIcon={<Icon type="material-community" name="counter" />}
        onChange={e => handleChange(e, 'age')}
      />
      <Input
        id="weight"
        testID="pet-weight"
        label="Raza"
        errorMessage={errorWeigth}
        label="peso de mascota"
        rightIcon={<Icon type="material-community" name="weight" />}
        onChange={e => handleChange(e, 'weight')}
      />
      <Button
        disabled={isLoading}
        testID="button"
        title="Agregar Mascota"
        onPress={handleSubmit}
        buttonStyle={styles.btnAddPet}
      />
      <Loading isVisible={isLoading} text="Guardando patitas" />
    </ScrollView>
  )
}
const defaultFormValues = () => {
  return {breed: '', name: '', age: '', weight: ''}
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
