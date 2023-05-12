// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4p3C1yJa0fYRxYwvlU8t1EyLvFwcn0nY",
  authDomain: "riche-fb30c.firebaseapp.com",
  projectId: "riche-fb30c",
  storageBucket: "riche-fb30c.appspot.com",
  messagingSenderId: "282562355554",
  appId: "1:282562355554:web:7bd0437d09041604298c3b"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire