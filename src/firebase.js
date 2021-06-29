import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyBiK612QgVrV1YUoPEh1O8wOey0Z5NbYgo",
  authDomain: "kajaki-harasiuki.firebaseapp.com",
  projectId: "kajaki-harasiuki",
  storageBucket: "kajaki-harasiuki.appspot.com",
  messagingSenderId: "1087142766678",
  appId: "1:1087142766678:web:12d8522f1c5f6a3cd5b3f7",
  measurementId: "G-GDMT4CPCML"

  }
);
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()



export {db, auth, storage}

export default firebaseApp;