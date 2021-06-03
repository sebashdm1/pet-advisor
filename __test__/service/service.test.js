import FirestoreMock from '../../__mocks__/firestoreMock'
global.firebase = new FirestoreMock()
import firebase from 'firebase/app'
import 'firebase/firestore'
import {addDocument} from '../../app/services/service'

describe('The Agreement model', () => {
  const firestoreMock = new FirestoreMock()
  beforeEach(() => {
    firebase.firestore = firestoreMock
    firestoreMock.reset()
  })

  it('should add a new pet', async () => {
    const collection = 'pets'
    const data = {
      petAge: 'prueba',
    }

    const callMock = firebase.firestore

    const response = await addDocument(collection, data, callMock)

    expect(response.statusResponse).toBe(true)
    expect(firestoreMock.mockCollection).toBeCalledWith(collection)
    expect(firestoreMock.mockAdd).toBeCalledWith(data)
  })
})
