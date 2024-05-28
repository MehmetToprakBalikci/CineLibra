import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {colors} from "./colorProfile";
import {collection, deleteDoc, doc, setDoc} from "firebase/firestore";
import {auth, db} from "../../firebase";

const RatingStars = ({ movieId, rating = 0, onRatingChange }) => {

    const handlePress = async (newRating) => {
        const updatedRating = rating === newRating ? 0 : newRating;

        if (updatedRating === 0) {
          
            await removeRating(movieId);
        } else {
            await addRating(movieId, updatedRating);
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


const addRating = async (movieId, rating) => {
    const userid = auth.currentUser.uid;

    try {
        const userDocRef = doc(db, "users", userid);
        const ratingsCollectionRef = collection(userDocRef, "Ratings");
        const movieRatingDoc = doc(ratingsCollectionRef, movieId.toString());

        await setDoc(movieRatingDoc, { movieId: movieId, rating: rating });

        console.log(`Added rating ${rating} for movie ${movieId}`);
    } catch (error) {
        console.error("Error adding rating: ", error);
    }
};

const removeRating = async (movieId) => {
    const userid = auth.currentUser.uid;

    try {
        const userDocRef = doc(db, "users", userid);
        const movieDocRef = doc(userDocRef, "Ratings",movieId.toString());

        await deleteDoc(movieDocRef);

        console.log(`Removed rating for movie ${movieId}`);
    } catch (error) {
        console.error("Error removing rating: ", error);
    }
};

export default RatingStars;
