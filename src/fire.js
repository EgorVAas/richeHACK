// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app"
import "firebase/compat/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARdZCVzJZdesLC72DdXjW42bqnQsrSs7M",
  authDomain: "riche-9310a.firebaseapp.com",
  projectId: "riche-9310a",
  storageBucket: "riche-9310a.appspot.com",
  messagingSenderId: "58925828927",
  appId: "1:58925828927:web:6062884eec79a56db2e18a"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;