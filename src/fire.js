// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhc9CAWXPP8bdOkXIKaQhAcBeAHfxz5OA",
  authDomain: "riche-d7d97.firebaseapp.com",
  projectId: "riche-d7d97",
  storageBucket: "riche-d7d97.appspot.com",
  messagingSenderId: "337846421331",
  appId: "1:337846421331:web:60e5aadc3dd78083d303a6"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire