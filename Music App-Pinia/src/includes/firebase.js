import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEZlVEfzZaRmFxtqokN52M16yuSyY5jUo",
  authDomain: "gmusica-42005.firebaseapp.com",
  projectId: "gmusica-42005",
  storageBucket: "gmusica-42005.appspot.com",
  messagingSenderId: "1029923349433",
  appId: "1:1029923349433:web:c176f83bcd8b7ec13dcc68",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
console.log(storage);

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");

export { auth, db, usersCollection, storage, songsCollection };
