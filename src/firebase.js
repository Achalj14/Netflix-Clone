import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD71h-JzEyLn0qGuEyNuYHIgnHfvR5MyBw",
    authDomain: "netflix-b3513.firebaseapp.com",
    projectId: "netflix-b3513",
    storageBucket: "netflix-b3513.appspot.com",
    messagingSenderId: "62659397366",
    appId: "1:62659397366:web:ad4b877385824563f20ed7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  const auth = firebase.auth();
 
  export { auth };