import firebase from "firebase/app"
import "firebase/database"

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "beer-tracker-6b9c8.firebaseapp.com",
  databaseURL: "https://beer-tracker-6b9c8.firebaseio.com",
  projectId: "beer-tracker-6b9c8",
  appId: "1:323442284612:web:b1e63d48a36226ffcac411",
})

export default firebase
