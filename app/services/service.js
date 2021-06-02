import {firebaseApp} from '../utils/firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
const db = firebase.firestore(firebaseApp)

export const addDocument = async (collection, data) => {
  const result = {statusResponse: true, error: null}
  try {
    await db.collection(collection).add(data)
  } catch (error) {
    result.statusResponse = false
    result.errror = error
  }
  return result
}
