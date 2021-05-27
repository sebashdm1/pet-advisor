import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAEJglk8qoqY-PaE5WLnG1BGoXu-D0OvPE',
  authDomain: 'pet-advisor-94a75.firebaseapp.com',
  databaseURL: 'https://pet-advisor-94a75-default-rtdb.firebaseio.com',
  projectId: 'pet-advisor-94a75',
  storageBucket: 'pet-advisor-94a75.appspot.com',
  messagingSenderId: '1068611541728',
  appId: '1:1068611541728:web:7bcdebe3e78e33d3604e85',
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
