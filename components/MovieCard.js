import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MoviePage from "../pages/MoviePage";
import {useNavigation} from "@react-navigation/native";

export default function MovieCard({ item, onPress }) {
    const navigation = useNavigation()
    const handlePress = () => {
        console.log("Clicked");
        navigation.navigate('MoviePage', { movieItem: item });
        //onPress();
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.movieItem}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.posterImage} />
                <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const windowWidth = Dimensions.get('window').width;
const numMoviesPerLine = 3; // Number of movies you want to show in one line

const styles = StyleSheet.create({
    movieItem: {
        marginRight: 10,
        width: windowWidth / numMoviesPerLine - 20, // Calculate width dynamically based on screen width
        // Subtracting 20 for margin (10 left and 10 right)
    },
    posterImage: {
        width: '100%',
        height: 180,
        borderRadius: 10,
    },
    movieTitle: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
        maxWidth: '100%', // Allow title to take full width of movie item
        overflow: 'hidden',
        textOverflow: 'ellipsis', // Display ellipsis if text overflows
        whiteSpace: 'nowrap', // Prevent line breaks
    },
});