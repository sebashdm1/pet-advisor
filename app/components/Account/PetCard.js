import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Text, FlatList, ActivityIndicator} from 'react-native'
import {firebaseApp} from '../../utils/firebase'
import {Avatar} from 'react-native-elements'
import {imageSelect} from '../../business-rules/AssingAvatar'
import {
  QuantityFoodToDog,
  QuantityFoodToCat,
} from '../../business-rules/FoodQuantity'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {size} from 'lodash'

const db = firebase.firestore(firebaseApp)

export default function PetCard() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const petResult = []
    db.collection('pets')
      .orderBy('petName', 'desc')
      .limit(3)
      .get()
      .then(response => {
        response.forEach(doc => {
          const pet = doc.data()
          pet.id = doc.id
          petResult.push(pet)
        })
        setPets(petResult)
      })
  }, [])

  return (
    <View>
      {size(pets) > 0 ? (
        <FlatList
          data={pets}
          renderItem={pet => <Pet pet={pet} />}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.loaderPets}>
          <ActivityIndicator size="large" />
          <Text>Cargando pets</Text>
        </View>
      )}
    </View>
  )
}

function Pet(props) {
  const {pet} = props
  const {petName, petAge, breed, humanAge, type, petWeight} = pet.item
  let foodToeat = foodToGive(type, petWeight)

  return (
    <View style={styles.viewPet}>
      <Avatar
        rounded
        size="large"
        showEditButton
        containerStyle={styles.petAvatar}
        source={imageSelect(type)}
      />
      <View>
        <Text>{`Nombre:  ${petName}`}</Text>
        <Text>{`edad: ${petAge}`}</Text>
        <Text>{`Raza: ${breed}`}</Text>
        <Text>{`la edad real de ${petName} es de: ${humanAge} años.`}</Text>
        <Text>{`debes alimentarlo con ${foodToeat} gramos`}</Text>
        <Text>{`de concentrado.`}</Text>
      </View>
    </View>
  )
}

function foodToGive(type, weight) {
  return type == 'dog' ? QuantityFoodToDog(+weight) : QuantityFoodToCat(+weight)
}

const styles = StyleSheet.create({
  loaderPets: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  viewPet: {
    flexDirection: 'row',
    margin: 10,
  },
  petAvatar: {
    marginRight: 2,
  },
})
