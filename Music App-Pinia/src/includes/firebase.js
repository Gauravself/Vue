import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEZlVEfzZaRmFxtqokN52M16yuSyY5jUo",
  authDomain: "gmusica-42005.firebaseapp.com",
  projectId: "gmusica-42005",
  storageBucket: "gmusica-42005.appspot.com",
  messagingSenderId: "1029923349433",
  appId: "1:1029923349433:web:eaca503cc2ed59493dcc68",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };
