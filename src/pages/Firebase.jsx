import firebase from "firebase/app";
 //firebase import
import "firebase/auth";
import "firebase/analytics";
import "firebase/firebase-firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhDOSfQva09Fr5TdcyrzPbLTkZXjhRFfw",
  authDomain: "notcha-bookse.firebaseapp.com",
  projectId: "notcha-bookse",
  storageBucket: "notcha-bookse.appspot.com",
  messagingSenderId: "287580267620",
  appId: "1:287580267620:web:bac6e3309599e2fe0beb71",
  measurementId: "G-KQMNVPBGJH",
};

firebase.initializeApp(firebaseConfig); //func for config
