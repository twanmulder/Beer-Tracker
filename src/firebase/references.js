import firebase from "./init"

export const database = firebase.database()
export const beerCountRef = database.ref("beerCount")
