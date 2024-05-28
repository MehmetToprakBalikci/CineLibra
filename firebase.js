import firebase from "firebase/app";
import "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth';
 import { collection, getFirestore } from "firebase/firestore";



// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA-nXOz31uiXy38uTQKYagJh8sCmJfbXxE",
    authDomain: "cinelibra-cebda.firebaseapp.com",
    projectId: "cinelibra-cebda",
    storageBucket: "cinelibra-cebda.appspot.com",
    messagingSenderId: "116023352283",
    appId: "1:116023352283:web:0c32141b4975f5869765fe"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });

//firestore service 
const db = getFirestore();

//collection ref
//const usersRef=collection(db,"users");

//const usersCol = await firestore().collection('users').get();



export {auth,db};
