import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
//import firestore from '@react-native-firebase/firestore';
import { deleteDoc, getDoc,getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { collection,addDoc,doc,query,where } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import {BookColors} from "../MoviePageComponents/colorProfile";




const BookActionIcons = ({ type, id,isAdded,setIsAdded,itemType = 0 }) => {
    //const [isAdded, setIsAdded] = useState(false);
    const isWatched = type === "watched" && isAdded;
    const isFavSelected= type==='favorite'&& isAdded;
    const isSelectedWatchLater = type==='watchLater' && isAdded;   BookColors.accent_weak

    const [isprevStateWatched,setStateWatched ] = useState(false); // initially false;
    const [isprevStateWatchLater,setStateWatchLater] = useState(false); // initially false;


    let iconColor = isAdded  ? BookColors.accent_weak : 'white';

//     if(isWatched && isprevStateWatchLater){// if current is watched and prev is watch later switch the states
//       setIsAdded(isprevStateWatchLater);
//       setStateWatchLater(isWatched);
// }
//      if(isSelectedWatchLater && isprevStateWatched){ // if current is watch later and prevstate is watched switch the states
//       setIsAdded(isprevStateWatchLater);
//       setStateWatched(isSelectedWatchLater);
//      }


    const handlePress = async () => {
        console.log("state is "+isAdded);
        if(isAdded)
            await removeFromCollection(type,id,itemType);
        else
            await addToCollection(type,id,itemType);
        setIsAdded(!isAdded);

    };
    const addToCollection = async (type, movieid, itemType) => {
        if (type === 'watched') { // if movie is watched
            await addToWatched(movieid,itemType);
            await removeFromCollection('watchLater', movieid,itemType);
            setStateWatched(isprevStateWatched); // watched is kept track
        } else if (type === 'favorite') { // if movie is favorite
            await addToFavorites(movieid,itemType);
        } else if (type === 'watchLater') {
            await addToWatchLater(movieid,itemType);
            await removeFromCollection('watched', movieid,itemType);
            setStateWatchLater(isprevStateWatchLater); // watchlater is kept track
        }
        setIsAdded(!isAdded);
    };

    const removeFromCollection = async (type, movieid, itemType) => {
        if (type === 'watched') {
            await removeFromWatched(movieid, itemType);
            await removeFromFavorites(movieid, itemType);
        } else if (type === 'favorite') {
            await removeFromFavorites(movieid, itemType);
        } else if (type === 'watchLater') {
            await removeFromWatchLater(movieid, itemType);
        }
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

const addToWatched =  async(movieid, itemType) => { // filmi izledi
    const userid =auth.currentUser.uid;

    try {
        // Reference to the user's document
        const userDocRef = doc(db, "users", userid);

        // Reference to the "addToWatched" subcollection within the "Movies" collection
        let addToWatchedCollectionRef= collection(userDocRef, "WatchedBooks");
        if(itemType === 0){
            addToWatchedCollectionRef = collection(userDocRef, "WatchedMovies");
        }

        const moviedoc = doc(addToWatchedCollectionRef,movieid.toString());

        await setDoc(moviedoc, {movieid:movieid});

        // sonradan izleme listesinden kaldır eğer işaretlendiyse (izlendi)
        // removeFromWatchLater(movieid);

        console.log(` Added  ${movieid} to WatchedMovies!`);
    } catch (error) {
        console.error("Error adding movie to WatchedMovies: ", error);
    }


};

const removeFromWatched = async (movieid, itemType) => { // elini cektiği zaman işareti geli aldıgında
    const userid = auth.currentUser.uid;

    try {

        // Reference to the user's document
        const userDocRef = doc(db, "users", userid);
        //console.log("movie path is "+userDocRef.path);

        // Reference to the specific document in the "favoriteMovies" subcollection
        let docRef=  doc(userDocRef, "WatchedBooks",movieid.toString());
        if(itemType === 0){
            docRef =  doc(userDocRef, "WatchedMovies",movieid.toString());
        }
        //console.log("path is "+movieDocRef.path);

        // Delete the document
        await deleteDoc(docRef);

        // remove from favorite list if exist
        // removeFromFavorites(movieid);


        console.log(`Document with ID ${movieid} deleted from WatchedMovies`);
    } catch (error) {
        console.error("Error deleting movie from WatchedMovies:", error);
    }
};

const addToFavorites = async(movieid, itemType) => {

    const userid =auth.currentUser.uid;
    try {
        // Reference to the user's document
        const userDocRef = doc(db, "users", userid);

        // Reference to the "favoriteMovies" subcollection within the user's documen
        let favoritesCollectionRef= collection(userDocRef, "favoriteBooks");
        if(itemType === 0){
            favoritesCollectionRef = collection(userDocRef, "favoriteMovies");
        }

        const moviedoc = doc(favoritesCollectionRef,movieid.toString());
        console.log("94 is "+moviedoc.path);

        await setDoc(moviedoc,{movieid:movieid});


        console.log(` Added  ${movieid} to favorites!`);
    } catch (error) {
        console.error("Error adding movie to favorites: ", error);
    }
}

const removeFromFavorites = async (movieid, itemType) => {

    const userid = auth.currentUser.uid;

    try {
        const userid = auth.currentUser.uid;


        // Reference to the user's document
        const userDocRef = doc(db, "users", userid);
        console.log("movie path is "+userDocRef.path);

        // Reference to the specific document in the "favoriteMovies" subcollection
        let movieDocRef= doc(userDocRef, "favoriteBooks",movieid.toString());
        if(itemType === 0){
            movieDocRef = doc(userDocRef, "favoriteMovies",movieid.toString());
        }

        console.log("path is "+movieDocRef.path);

        // Delete the document
        await deleteDoc(movieDocRef);

        console.log(`Document with ID ${movieid} deleted from Favorites`);
    } catch (error) {
        console.error("Error deleting movie from favoriteMovies:", error);
    }
}


const addToWatchLater = async (movieid, itemType) => { //önce izlemeden hemen ztn sonradan izleye tıklayamıor
    const userid =auth.currentUser.uid;
    try {
        // Reference to the user's document
        const userDocRef = doc(db, "users", userid);

        // Reference to the "addToWatchLater" subcollection within the "Movies" collection
        let addToWatchLaterCollectionRef= collection(userDocRef, "WatchLaterBooks");
        if(itemType === 0){
            addToWatchLaterCollectionRef = collection(userDocRef, "WatchLaterMovies");
        }
        const movieDocRef = doc(addToWatchLaterCollectionRef,movieid.toString());
        await setDoc(movieDocRef,{movieid:movieid});


        console.log(`Added ${movieid} to WatchLaterMovies!`);
    } catch (error) {
        console.error("Error adding movie to WatchLaterMovies: ", error);
    }


}

const removeFromWatchLater= async (movieid, itemType) => {
    const userid =auth.currentUser.uid;
    try {

        // Reference to the user's document
        const userDocRef = doc(db, "users", userid);
        //console.log("movie path is "+userDocRef.path);

        // Reference to the specific document in the "favoriteMovies" subcollection
        let movieDocRef= doc(userDocRef, "WatchLaterBooks",movieid.toString());
        if(itemType === 0){
            movieDocRef = doc(userDocRef, "WatchLaterMovies",movieid.toString());
        }
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

export default BookActionIcons;
