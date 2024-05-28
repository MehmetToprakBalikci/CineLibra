import {Image, StyleSheet, Text, View} from "react-native";
import { BookColors } from "../MoviePageComponents/colorProfile"

export default function CastProfile({item}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w185${item.profile_path}`}}/>
            <Text style={styles.text}  > {item.name} </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height:140,
        width: 110,
        margin: 2,
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth:2,
        borderColor: BookColors.accent_weak,
    },
    text: {
        marginTop:5,
        textAlign: 'center',
        color: BookColors.text_color_white,
    },
})
