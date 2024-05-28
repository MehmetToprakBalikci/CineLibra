import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MoviePage from "../../pages/MoviePages/MoviePage";
import {useNavigation} from "@react-navigation/native";
import {BookColors} from '../MoviePageComponents/colorProfile';

const text_color_weak = BookColors.text_color_weak
const text_color = BookColors.text_color
const opacity_color_strong = BookColors.opacity_color_strong
const opacity_color = BookColors.opacity_color

export default function BookCard({ item }) {
    const navigation = useNavigation()
    const handlePress = () => {
        console.log("Clicked");
        navigation.navigate('BookPage', { movieItem: item });
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
