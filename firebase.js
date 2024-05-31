import firebase from "firebase/app";
import "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth';
 import { collection, getDocs, getFirestore,doc,query } from "firebase/firestore";
import { useEffect } from "react";



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



async function fetchFavoriteMovieIDs(type =0 ) {

  const userid = auth.currentUser.uid;
  const userRef = doc(db,"users",userid);
  let collectionName = (type === 0) ? "favoriteMovies" : "favoriteBooks";
  const favoriteMoviesCollectionRef = collection(userRef,collectionName);
  // console.log(favoriteMoviesCollectionRef.path);
  const q = query(favoriteMoviesCollectionRef);
  const querySnapshot = await getDocs(q)
  let movieIDs = [];
  querySnapshot.forEach((doc) => {
    movieIDs.push(doc.id);
  
  });
  //console.log("favorite movies: "+movieIDs);
  return movieIDs;
}
async function fetchWatchedMovieIDs(type = 0) {
  const userid = auth.currentUser.uid;
  const userRef = doc(db, "users", userid);
  let collectionName = (type === 0) ? "WatchedMovies" : "WatchedBooks";
  const WatchedCollectionRef = collection(userRef, collectionName);
  const q = query(WatchedCollectionRef);
  const querySnapshot = await getDocs(q);
  let watchedIDs = [];
  querySnapshot.forEach((doc) => {
    watchedIDs.push(doc.id);
  });
  return watchedIDs;
}

async function fetchWatchLaterMovieIDs(type =0) {
  const userid = auth.currentUser.uid;
  const userRef = doc(db,"users",userid);
  let collectionName = (type === 0) ? "WatchLaterMovies" : "WatchLaterBooks";
  const WatchLaterMoviesCollectionRef = collection(userRef,collectionName);
  // console.log(WatchLaterMoviesCollectionRef.path);
   const q = query(WatchLaterMoviesCollectionRef);
  const querySnapshot = await getDocs(q)
  let movieIDs = [];
  querySnapshot.forEach((doc) => {
   // console.log(doc.id); 
    movieIDs.push(doc.id);
  
  });
  
  //console.log("watched later movies: "+movieIDs);
  return movieIDs;
}






// const fetchMovie = async({listtype,movieid})=>{
    
//   const userid =auth.currentUser.uid;
//   try {
//       // Reference to the user's document
//       const userDocRef = doc(db, "users", userid);
      
//       // Reference to the "favoriteMovies" subcollection within the user's document
//       const favoriteMoviesCollectionRef = collection(userDocRef, listtype);
      
//       // Query to get all documents from the "favoriteMovies" subcollection
//      // const q = query(favoriteMoviesCollectionRef);
//       const q = query(favoriteMoviesCollectionRef, where("movieid", "==", movieid));
      
//       // Get the documents from the query
//       const querySnapshot = await getDocs(q);
      
//       // Extract data from each document
//       if (!querySnapshot.empty) {
//           // Get the first (and only) document from the querySnapshot
//           const docData = querySnapshot.docs[0].data();
//           console.log("Favorite movie:", docData);
//           return querySnapshot.docs[0].movieid; 
//         } else {
//           console.log("Favorite movie not found.");
//           return null;
//         }
//       } catch (error) {
//         console.error("Error fetching   movie: ", error);
//         return null;
//       }

// }



export {auth,db,fetchFavoriteMovieIDs,fetchWatchedMovieIDs,fetchWatchLaterMovieIDs};
