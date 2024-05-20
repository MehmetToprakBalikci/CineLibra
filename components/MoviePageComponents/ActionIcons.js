import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { colors } from "../colorProfile";

const ActionIcons = ({ type }) => {
    const [isAdded, setIsAdded] = useState(false);
    const iconColor = isAdded ? colors.accent_weak : 'white';

    const handlePress = () => {
        if (isAdded) {
            if (type === 'watched') {
                removeFromWatched();
            } else if (type === 'favorite') {
                removeFromFavorites();
            } else if (type === 'watchLater') {
                removeFromWatchLater();
            }
        } else {
            if (type === 'watched') {
                addToWatched();
            } else if (type === 'favorite') {
                addToFavorites();
            } else if (type === 'watchLater') {
                addToWatchLater();
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

const addToWatched = () => {
    console.log("Added to Watched");
};

const removeFromWatched = () => {
    console.log("Removed from Watched");
};

const addToFavorites = () => {
    console.log("Added to Favorites");
};

const removeFromFavorites = () => {
    console.log("Removed from Favorites");
};

const addToWatchLater = () => {
    console.log("Added to Watch Later");
};

const removeFromWatchLater = () => {
    console.log("Removed from Watch Later");
};

export default ActionIcons;
