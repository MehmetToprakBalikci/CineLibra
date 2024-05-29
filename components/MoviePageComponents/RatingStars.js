import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {colors} from "./colorProfile";
import {collection, deleteDoc, doc, setDoc} from "firebase/firestore";
import {auth, db} from "../../firebase";

const RatingStars = ({ movieId, rating = 0, onRatingChange, type = 0 }) => {

    const handlePress = async (newRating) => {
        const updatedRating = rating === newRating ? 0 : newRating;

        if (updatedRating === 0) {
          
            await removeRating(movieId, type);
        } else {
            await addRating(movieId, updatedRating, type);
        }

        if (onRatingChange) {
            onRatingChange(updatedRating);
        }
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => handlePress(star)}>
                    <MaterialIcons
                        name="star"
                        size={35}
                        color={star <= rating ? colors.accent_weak : 'white'}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};


const addRating = async (ID, rating, type) => {
    const userid = auth.currentUser.uid;

    try {
        const userDocRef = doc(db, "users", userid);
        let ratingsCollectionRef = collection(userDocRef, "BookRatings");
        if(type === 0){
            ratingsCollectionRef = collection(userDocRef, "Ratings");
        }

        const ratingDoc = doc(ratingsCollectionRef, ID.toString());

        await setDoc(ratingDoc, { ItemId: ID, rating: rating });

        console.log(`Added rating ${rating} for item ${ID}`);
    } catch (error) {
        console.error("Error adding rating: ", error);
    }
};

const removeRating = async (ID, type) => {
    const userid = auth.currentUser.uid;

    try {
        const userDocRef = doc(db, "users", userid);
        let docRef= doc(userDocRef, "BookRatings",ID.toString());
        if(type === 0){
            docRef = doc(userDocRef, "Ratings",ID.toString());
        }

        await deleteDoc(docRef);

        console.log(`Removed rating for movie ${ID}`);
    } catch (error) {
        console.error("Error removing rating: ", error);
    }
};

export default RatingStars;
