import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyABmbzV4pN4v-16w6eCLQ2TRvQpJfo5WTA",
  authDomain: "crwn-db-13439.firebaseapp.com",
  projectId: "crwn-db-13439",
  storageBucket: "crwn-db-13439.appspot.com",
  messagingSenderId: "402211501514",
  appId: "1:402211501514:web:0b19d96f886167ebc28b33",
  measurementId: "G-JEB93VXFG9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
