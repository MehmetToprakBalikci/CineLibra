import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    ImageBackground,
    Image,
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList
} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import {fetchCastDetails} from "../../api/APICalls";
import CastProfile from "../../components/MoviePageComponents/CastProfile";
import {colors} from "../../components/MoviePageComponents/colorProfile";
import ActionIcons from "../../components/MoviePageComponents/ActionIcons";

const MoviePage = () => {
    const route = useRoute();
    const { movieItem } = route.params;
    const navigation = useNavigation();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchCast(movieItem.id);
    }, []);

    const fetchCast = async (movieId) => {
        try {
            const castDetails = await fetchCastDetails(movieId);
            setCast(castDetails.cast);
        } catch (error) {
            console.error('Error fetching cast:', error);
        }
    };

    return (
        <ImageBackground
            source={{ uri: `https://image.tmdb.org/t/p/original${movieItem.backdrop_path}` }}
            style={styles.background}
            blurRadius={0}
        >
            <TouchableOpacity style={styles.navigationIcon} onPress={() => navigation.goBack()}>
                <AntDesign name="back" size={34} color={colors.accent_weak} />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.scrollView}>

                <View style={styles.overlay2}>
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', 'rgba(30,30,30,0.5)', 'rgba(30,30,30,0.90)']}
                        locations={[0, 0.7, 0.95]}
                        style={styles.gradient}
                    />
                </View>
                <View style={styles.overlay}>
                    <View style={styles.overlay3}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500${movieItem.poster_path}` }}
                            style={styles.overlayImage}
                        />
                        <View style={styles.overlay4}>
                            <Text style={styles.title} adjustsFontSizeToFit numberOfLines={2}>{movieItem.title}</Text>
                            <View>
                                <View style={styles.iconRow}>
                                    <ActionIcons type="watched" />
                                    <ActionIcons type="favorite" />
                                    <ActionIcons type="watchLater" />
                                </View>
                                <View style={styles.iconRow}>
                                    <IconStarFilled />
                                    <IconStarFilled />
                                    <IconStarFilled />
                                    <IconStarFilled />
                                    <IconStarFilled />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.descriptionView}>
                        <Text style={styles.description} adjustsFontSizeToFit>{movieItem.overview}
                        </Text>
                    </View>
                    <FlatList
                        horizontal
                        data={cast.filter(item =>
                                (item.known_for_department === "Acting" && item.order < 15) ||
                                (item.known_for_department === "Directing") ||
                                (item.job === "Director")
                        )}
                        renderItem={({ item }) => (
                            <CastProfile item={item}/>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Cover the entire screen
    },
    scrollView: {
        flexGrow: 1,
    },
    overlay: {
        backgroundColor: 'rgba(30,30,30,0.90)',
    },
    overlay2: {
        height: windowHeight - (200+185),
        //backgroundColor: 'rgba(2000, 0, 250, 0.3)',
    },
    container: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    overlay3: {
        //backgroundColor: 'rgba(100,100,1000,0.90)',
        flexDirection: 'row',
    },
    overlay4: {
        flex: 2,
        height:200,
        alignItems: "center",
        justifyContent: "space-between",
        //backgroundColor: 'rgba(1000,10,10,0.90)',
    },
    iconRow: {
        //backgroundColor: '#500',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
    },
    iconsCol: {

    },
    overlayImage: {
        marginLeft: 5,
        flex: 1,
        borderRadius: 5,
        borderWidth:2,
        borderColor: colors.accent_weak,
        height: 200,
    },
    title: {
        //backgroundColor: '#050',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 3,
        alignSelf: 'center',
        color: '#fff', // Text color
    },
    description: {
        //backgroundColor: '#006',
        margin: 4,
        fontSize:17,
        color: '#fff', // Text color
    },
    descriptionView:{
        //backgroundColor: '#166',
        height: 150,
        marginBottom:10,
    },
    navigationIcon: {
        height:45,
        width:45,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'orange',
        top: windowHeight*0.03,
        zIndex: 1,
    },
});

const IconStarFilled = () => (
    <MaterialIcons name="star" size={35} color="white" />
);
export default MoviePage;
