import React from 'react'
import {View} from 'react-native'
import {Input, Icon, Button} from 'react-native-elements'

export default function AddPetForm() {
  return (
    <View>
      <Input
        testID="pet-breed"
        label="Raza"
        rightIcon={<Icon type="material-community" name="pet-breed" />}
      />
      <Input
        testID="pet-name"
        label="Nombre de la mascota"
        rightIcon={<Icon type="material-community" name="pet-name" />}
      />
      <Input
        testID="pet-age"
        label="edad mascota"
        rightIcon={<Icon type="material-community" name="pet-age" />}
      />
      <Input
        testID="pet-weight"
        label="Tipo de mascota"
        rightIcon={<Icon type="material-community" name="pet-weight" />}
      />
      <Button testID="button" title="Agregar Mascota" />
    </View>
  )
}
