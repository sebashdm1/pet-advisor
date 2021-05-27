import React, {useRef, useState, useEffect} from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'
import * as firebase from 'firebase'
import {Button, Divider} from 'react-native-elements'
import Toast from 'react-native-easy-toast'
import Loading from '../../components/Loading'
import PetBudget from '../../components/Account/PetCard'
import InfoUser from '../../components/Account/InfoUser'
import {useNavigation} from '@react-navigation/native'

export default function userLogged() {
  const navigation = useNavigation()
  const toastRef = useRef()
  const [userInfo, setUserInfo] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [loadingText, setLoadingText] = useState('')

  useEffect(() => {
    ;(async () => {
      const user = await firebase.auth().currentUser
      setUserInfo(user)
    })()
  }, [])

  return (
    <View style={style.viewUserInfo}>
      {userInfo && <InfoUser userInfo={userInfo} />}
      <Divider style={style.divider} />
      <View>
        <Text>Mis Mascotas</Text>
        <Button
          title="+ Agregar"
          containerStyle={style.btnContainerStyle}
          buttonStyle={style.btnStyle}
          onPress={() => navigation.navigate('add-pet')}
        />
      </View>
      <ScrollView>
        <PetBudget />
      </ScrollView>
      <Button
        title="cerrar sesion"
        titleStyle={style.btnCloseSessionText}
        onPress={() => firebase.auth().signOut()}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading text={loadingText} isVisible={isVisible} />
    </View>
  )
}

const style = StyleSheet.create({
  viewUserInfo: {
    minHeight: '100%',
    backgroundColor: '#f2f2f2',
  },
  btnCloseSession: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnCloseSessionText: {
    color: 'black',
  },
  divider: {
    backgroundColor: '#19AFFF',
    margin: 40,
  },
  btnContainerStyle: {
    width: '30%',
  },
  btnStyle: {
    backgroundColor: '#19AFFF',
  },
})
