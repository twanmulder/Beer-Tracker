import firebase from "firebase"
import secretKey from "./secretKey"

firebase.initializeApp({ ...secretKey })

export default firebase
