import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { colors } from "./colorProfile";
import {auth} from "../../firebase";

const ActionIcons = ({ type, id }) => {
    const [isAdded, setIsAdded] = useState(false);
    const iconColor = isAdded ? colors.accent_weak : 'white';

    const handlePress = () => {
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

const addToWatched = (id) => {
    console.log("Added to Watched");
};

const removeFromWatched = (id) => {
    console.log("Removed from Watched");
};

const addToFavorites = (id) => {
    console.log("Added to Favorites");


};

const removeFromFavorites = (id) => {
    console.log("Removed from Favorites");
};

const addToWatchLater = (id) => {
    console.log("Added to Watch Later");
};

const removeFromWatchLater = (id) => {
    console.log("Removed from Watch Later");
};

export default ActionIcons;
