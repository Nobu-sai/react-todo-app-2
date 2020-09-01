import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBvyDsJupwF3VPQzj4Kvug6m9cDSJ_2c70",
  authDomain: "react-to-do-app-from-scratch.firebaseapp.com",
  databaseURL: "https://react-to-do-app-from-scratch.firebaseio.com",
  projectId: "react-to-do-app-from-scratch",
  storageBucket: "react-to-do-app-from-scratch.appspot.com",
  messagingSenderId: "660431519473",
  appId: "1:660431519473:web:eea5e41b113df4f0083350",
  measurementId: "G-PKF0NTKPCS"
})


const db = firebaseApp.firestore();

export default db;