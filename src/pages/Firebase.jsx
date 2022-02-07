import firebase from "firebase/app";
 //firebase import
import "firebase/auth";
import "firebase/analytics";
import "firebase/firebase-firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJF7ER0e5HOyX8m6H6eJYjPaXQ9MiwekI",
  authDomain: "note-book-47ff4.firebaseapp.com",
  projectId: "note-book-47ff4",
  storageBucket: "note-book-47ff4.appspot.com",
  messagingSenderId: "226541262338",
  appId: "1:226541262338:web:07f9c63372b4554c92b91b",
};

firebase.initializeApp(firebaseConfig); //func for config
