import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Avatar} from 'react-native-elements'

export default function InfoUser(props) {
  const {
    userInfo: {photoURL, displayName, email},
  } = props

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        containerStyle={styles.userInfoAvatar}
        source={
          photoURL
            ? {uri: photoURL}
            : require('../../../assets/img/avatar-default.jpg')
        }
      />
      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : 'Anonimo'}
        </Text>
        <Text>{email ? email : 'social login'}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingBottom: 30,
    paddingTop: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: 'bold',
    paddingTop: 5,
  },
})
