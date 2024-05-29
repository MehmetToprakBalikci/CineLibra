import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {BookColors} from '../MoviePageComponents/colorProfile';
import fallbackImage from '../../assets/book.png';

const text_color_weak = BookColors.text_color_weak
const text_color = BookColors.text_color
const opacity_color_strong = BookColors.opacity_color_strong
const opacity_color = BookColors.opacity_color

export default function BookCard({ item }) {
    const navigation = useNavigation()
    const handlePress = () => {
        console.log("Clicked");
        navigation.navigate('BookPage', { bookItem: item });
    };

    const { title, imageLinks } = item.volumeInfo;
    const imageSource = imageLinks?.thumbnail ? { uri: imageLinks.thumbnail } : fallbackImage;

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.bookItem}>
                <Image source={ imageSource } style={styles.posterImage} />
                <Text style={styles.bookTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const windowWidth = Dimensions.get('window').width;
const numBooksPerLine = 3; // Number of books you want to show in one line

const styles = StyleSheet.create({
    bookItem: {
        marginRight: 10,
        width: windowWidth / numBooksPerLine,
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
    bookTitle: {
        color:text_color_weak,
        marginTop: 6,
        marginHorizontal: 6,
        fontSize: 14,
        textAlign: 'center',
        maxWidth: '100%',
    },
});
