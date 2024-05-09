import {Image, StyleSheet, Text, View} from "react-native";
import { colors } from "../colorProfile"

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
        borderColor: colors.accent_weak,
    },
    text: {
        marginTop:5,
        textAlign: 'center',
        color: colors.text_color,
    },
})