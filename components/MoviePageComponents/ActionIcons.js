import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { colors } from "./colorProfile";
import { deleteDoc, getDoc,getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { collection,addDoc,doc,query,where } from 'firebase/firestore';
import { auth, db } from '../../firebase';




const ActionIcons = ({ type, id,isAdded,setIsAdded }) => {
    //const [isAdded, setIsAdded] = useState(false);
    const iconColor = isAdded ? colors.accent_weak : 'white';

    const handlePress = () => {
        //console.log("state is "+isAdded);
        if (isAdded) {
            if (type === 'watched') {
                removeFromWatched(id);
            } else if (type === 'favorite') {
                removeFromFavorites(id);
            } else if (type === 'watchLater') {
                removeFromWatchLater(id);
            }
        } else {
            if (type === 'watched') {
                addToWatched(id);
            } else if (type === 'favorite') {
                addToFavorites(id);
            } else if (type === 'watchLater') {
                addToWatchLater(id);
            }
        }
        setIsAdded(!isAdded);
        //console.log("After state is "+isAdded);

    };

    const renderIcon = () => {
        switch (type) {
            case 'watched':
                return <MaterialCommunityIcons name="eye" size={45} color={iconColor} />;
            case 'favorite':
                return <MaterialIcons name="favorite" size={45} color={iconColor} />;
            case 'watchLater':
                return <MaterialIcons name="watch-later" size={45} color={iconColor} />;
            default:
                return null;
        }
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            {renderIcon()}
        </TouchableOpacity>
    );
};

const addToWatched =  async(movieid) => {
    const userid =auth.currentUser.uid;

    try {
        // Reference to the user's document
        const userDocRef = doc(db, "users", userid);
            
        // Reference to the "addToWatched" subcollection within the "Movies" collection
        const addToWatchedCollectionRef = collection(userDocRef, "WatchedMovies");

        const moviedoc = doc(addToWatchedCollectionRef,movieid.toString());
        
        await setDoc(moviedoc, {movieid:movieid});
        
        console.log(` Added  ${movieid} to WatchedMovies!`);
      } catch (error) {
        console.error("Error adding movie to WatchedMovies: ", error);
      }
   

   };

const removeFromWatched = async (movieid) => {
    const userid = auth.currentUser.uid;
  
    try {
       
          // Reference to the user's document
          const userDocRef = doc(db, "users", userid);
          //console.log("movie path is "+userDocRef.path);
      
          // Reference to the specific document in the "favoriteMovies" subcollection
          const movieDocRef = doc(userDocRef, "WatchedMovies",movieid.toString());
          //console.log("path is "+movieDocRef.path);
      
          // Delete the document
          await deleteDoc(movieDocRef);
      
          console.log(`Document with ID ${movieid} deleted from WatchedMovies`);
        } catch (error) {
          console.error("Error deleting movie from WatchedMovies:", error);
        }
};

const addToFavorites = async(movieid) => {
    
        const userid =auth.currentUser.uid;
        try {
            // Reference to the user's document
            const userDocRef = doc(db, "users", userid);
                    
            // Reference to the "favoriteMovies" subcollection within the user's documen
            const favoritesCollectionRef = collection(userDocRef, "favoriteMovies");
            const moviedoc = doc(favoritesCollectionRef,movieid.toString());
            //console.log("94 is "+moviedoc.path);
    
             await setDoc(moviedoc,{movieid:movieid});

        
            console.log(` Added  ${movieid} to favorites!`);
          } catch (error) {
            console.error("Error adding movie to favorites: ", error);
          }
        }

 const removeFromFavorites = async (movieid) => {
  
    const userid = auth.currentUser.uid;
  
    try {
        const userid = auth.currentUser.uid;

     
          // Reference to the user's document
          const userDocRef = doc(db, "users", userid);
          //console.log("movie path is "+userDocRef.path);
      
          // Reference to the specific document in the "favoriteMovies" subcollection
          const movieDocRef = doc(userDocRef, "favoriteMovies",movieid.toString());
          //console.log("path is "+movieDocRef.path);
      
          // Delete the document
          await deleteDoc(movieDocRef);
      
          console.log(`Document with ID ${movieid} deleted from Favorites`);
        } catch (error) {
          console.error("Error deleting movie from favoriteMovies:", error);
        }
  }
  

const addToWatchLater = async (movieid) => {
    const userid =auth.currentUser.uid;
    try {
        // Reference to the user's document
        const userDocRef = doc(db, "users", userid);
            
        // Reference to the "addToWatchLater" subcollection within the "Movies" collection
        const addToWatchLaterCollectionRef = collection(userDocRef, "WatchLaterMovies");
        const movieDocRef = doc(addToWatchLaterCollectionRef,movieid.toString());
        await setDoc(movieDocRef,{movieid:movieid});
        
        
        console.log(`Added ${movieid} to WatchLaterMovies!`);
      } catch (error) {
        console.error("Error adding movie to WatchLaterMovies: ", error);
      }

   
}

const removeFromWatchLater= async (movieid) => {
    const userid =auth.currentUser.uid;
    try {

        // Reference to the user's document
        const userDocRef = doc(db, "users", userid);
        //console.log("movie path is "+userDocRef.path);

        // Reference to the specific document in the "favoriteMovies" subcollection
        const movieDocRef = doc(userDocRef, "WatchLaterMovies",movieid.toString());
        //console.log("path is "+movieDocRef.path);

        // Delete the document
        await deleteDoc(movieDocRef);

        console.log(`Document with ID ${movieid} deleted from WatchLaterMovies`);
    } catch (error) {
        console.error("Error deleting movie from WatchLaterMovies:", error);
    }
};

const fetchMovie = async({listtype,movieid})=>{
    
    const userid =auth.currentUser.uid;
    try {
        // Reference to the user's document
        const userDocRef = doc(db, "users", userid);
        
        // Reference to the "favoriteMovies" subcollection within the user's document
        const favoriteMoviesCollectionRef = collection(userDocRef, listtype);
        
        // Query to get all documents from the "favoriteMovies" subcollection
       // const q = query(favoriteMoviesCollectionRef);
        const q = query(favoriteMoviesCollectionRef, where("movieid", "==", movieid));
        
        // Get the documents from the query
        const querySnapshot = await getDocs(q);
        
        // Extract data from each document
        if (!querySnapshot.empty) {
            // Get the first (and only) document from the querySnapshot
            const docData = querySnapshot.docs[0].data();
            console.log("Favorite movie:", docData);
            return querySnapshot.docs[0].movieid; 
          } else {
            console.log("Favorite movie not found.");
            return null;
          }
        } catch (error) {
          console.error("Error fetching   movie: ", error);
          return null;
        }

}

export default ActionIcons;
