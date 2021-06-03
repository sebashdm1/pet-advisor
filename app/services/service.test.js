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

  it('should xyz', async () => {
    const collection = '_test'
    const data = {}

    const callMock = jest
      .spyOn(firebase.firestore.collection, 'add')
      .mockImplementation()

    const response = await addDocument(collection, data)

    expect(response.statusResponse).toBe(true)
    expect(callMock).toHaveBeenCalledTimes(1)
  })
})
