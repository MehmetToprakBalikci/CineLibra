import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MoviePage from "../pages/MoviePages/MoviePage";
import {useNavigation} from "@react-navigation/native";
import {colors} from './colorProfile';

const text_color_weak = colors.text_color_weak
const text_color = colors.text_color
const opacity_color_strong = colors.opacity_color_strong
const opacity_color = colors.opacity_color

export default function MovieCard({ item }) {
    const navigation = useNavigation()
    const handlePress = () => {
        console.log("Clicked");
        navigation.navigate('MoviePage', { movieItem: item });
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
        width: windowWidth / numMoviesPerLine,
        backgroundColor:opacity_color,
        borderWidth:2,
        borderRadius:15,
        borderColor:opacity_color_strong,
        height:250,
        marginBottom:10,
    },
    posterImage: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        borderColor: opacity_color,
        borderWidth:2,
    },
    movieTitle: {
        color:text_color_weak,
        marginTop: 6,
        marginHorizontal: 6,
        fontSize: 14,
        textAlign: 'center',
        maxWidth: '100%',
    },
});
