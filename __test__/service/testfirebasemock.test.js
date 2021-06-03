import FirestoreMock from '../../__mocks__/firestoreMock'
global.firebase = new FirestoreMock()
import firebase from 'firebase/app'
import 'firebase/firestore'
import {addDocument} from '../../app/services/service'

const data = {
  name: 'kira',
  age: 'sebas ',
}

describe('The Agreement model', () => {
  const firestoreMock = new FirestoreMock()
  beforeEach(() => {
    firebase.firestore = firestoreMock
    firestoreMock.reset()
  })

  it('does something', done => {
    firestoreMock.mockAddReturn = {id: 'mascota agregada correctamente'}
    firebase.firestore
      .collection('foobar')
      .add({foo: 'bar'})
      .then(res => {
        expect(firestoreMock.mockCollection).toBeCalledWith('foobar')
        expect(firestoreMock.mockAdd).toBeCalledWith({foo: 'bar'})
        expect(res.id).toEqual('mascota agregada correctamente')
        done()
      })
      .catch(done)
  })
})
