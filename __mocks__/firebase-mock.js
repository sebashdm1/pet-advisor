const firestore = () => {
  return {
    collection: nameCollection => {
      return {
        add: objData => {
          return new Promise.resolve('la mascota fue agregada')
        },
      }
    },
  }
}

const firebase = {
  firestore: firestore,
}

export default jest.fn(() => {
  return firebase
})
