import firebase from 'firebase';
import "firebase/auth";
import 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEc1fTU4AWucP1NtVHfgPTnDRZNaGHeI0",
  authDomain: "collegefinances-adaf9.firebaseapp.com",
  databaseURL: "https://collegefinances-adaf9-default-rtdb.firebaseio.com",
  projectId: "collegefinances-adaf9",
  storageBucket: "collegefinances-adaf9.appspot.com",
  messagingSenderId: "640504031621",
  appId: "1:640504031621:web:35f6e3378b3e7e442ebcec",
  measurementId: "G-PCYE8D9PTS"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
export const firestore = firebase.firestore();

export default { firebase, firebaseConfig };