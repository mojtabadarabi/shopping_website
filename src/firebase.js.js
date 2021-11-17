import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database"
import "firebase/compat/firestore"
import { getDatabase, ref, set } from "firebase/compat/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCI-7v8e1SUw-COxK9xHlLqrqJuFZcozpE",
  authDomain: "shopping-7941a.firebaseapp.com",
  databaseURL: "https://shopping-7941a-default-rtdb.firebaseio.com",
  projectId: "shopping-7941a",
  storageBucket: "shopping-7941a.appspot.com",
  messagingSenderId: "393884911728",
  appId: "1:393884911728:web:e877257b166d56c2a38cb5",
  measurementId: "G-0XBPBBMKVJ"
})

export const auth = app.auth()
export const db = app.database()
export const firebasedb = app.firestore()
export default app