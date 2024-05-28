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
    FlatList, StatusBar, SafeAreaView
} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import {fetchCastDetails} from "../../api/tmdbAPI/APICalls";
import CastProfile from "../../components/MoviePageComponents/CastProfile";
import {colors} from "../../components/MoviePageComponents/colorProfile";
import ActionIcons from "../../components/MoviePageComponents/ActionIcons";
import { auth } from '../../firebase';
import {getDocs, doc, collection, query, where, getDoc} from 'firebase/firestore';
import { db } from '../../firebase';
import RatingStars from "../../components/MoviePageComponents/RatingStars";


const MoviePage = () => {
    const route = useRoute();
    const { movieItem } = route.params;
    const navigation = useNavigation();
    const [cast, setCast] = useState([]);
    const [isAddedWatched, setIsAddedWatched] = useState(false);
    const [isAddedFavorite, setAddedFavorite] = useState(false);
    const [isAddedWatchLater, setIsWatchLater] = useState(false);
    const [rating, setRating] = useState(0);


    // console.log("isfavorite in movie page is "+isAddedFavorite);


    useEffect(() => {
        fetchCast(movieItem.id);
        fetchMovieStates();
    }, []);

    const fetchCast = async (movieId) => {
        try {
            const castDetails = await fetchCastDetails(movieId);
            setCast(castDetails.cast);
        } catch (error) {
            console.error('Error fetching cast:', error);
        }
    };

    const fetchMovieStates = async () => {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(db, "users", userId);

        try {
            // Fetch watched state
            const watchedCollectionRef = collection(userDocRef, "WatchedMovies");
            const watchedQuery = query(watchedCollectionRef, where("movieid", "==", movieItem.id));
            const watchedSnapshot = await getDocs(watchedQuery);
            if (!watchedSnapshot.empty ) { // eğer izlendiyse izlendi olarak işaretle
                console.log("watched doc "+watchedSnapshot.docs);
                setIsAddedWatched(true);
                
            }// batmanı sonradan izlicem dedim ve izledim simdi noolcak
            // sonradan izleme listesine attım belli bir süre sonra izlemeye karar veredim 

            // Fetch favorite state
            const favoriteCollectionRef = collection(userDocRef, "favoriteMovies");
            const favoriteQuery = query(favoriteCollectionRef, where("movieid", "==", movieItem.id));
            const favoriteSnapshot = await getDocs(favoriteQuery);
            if (!favoriteSnapshot.empty ) { // eğer favoriye alındıysa // filmin izlenmiş olması lazım
                console.log("favorite doc "+favoriteSnapshot.docs);
                setAddedFavorite(true);
            }

            // Fetch watch later state
            const watchLaterCollectionRef = collection(userDocRef, "WatchLaterMovies");
            const watchLaterQuery = query(watchLaterCollectionRef, where("movieid", "==", movieItem.id));
            const watchLaterSnapshot = await getDocs(watchLaterQuery);
            if (!watchLaterSnapshot.empty) { // eğer sonradan izlenenlere eklendiyse
                                                  // filmin önceden izlenmiş olmaması lazım
            console.log("watchedlater doc "+watchLaterSnapshot.docs);                                   
             setIsWatchLater(true); // statei güncelle

            }

            // Fetch rating state
            const ratingsCollectionRef = collection(userDocRef, "Ratings");
            const ratingQuery = query(ratingsCollectionRef, where("movieId", "==", movieItem.id));
            const ratingSnapshot = await getDocs(ratingQuery);
            if (!ratingSnapshot.empty) {
                setRating(ratingSnapshot.docs[0].data().rating);
            }
        } catch (error) {
            console.error('Error fetching movie states:', error);
        }
    };

    return (
        <ImageBackground
            source={{ uri: `https://image.tmdb.org/t/p/original${movieItem.backdrop_path}` }}
            style={styles.background}
            blurRadius={0}
        >
            <ScrollView contentContainerStyle={styles.containerMain}>
                <TouchableOpacity style={styles.navigationIcon} onPress={() => navigation.goBack()}>
                    <AntDesign name="back" size={34} color={colors.accent_weak} />
                </TouchableOpacity>

                <View style={styles.gradientStyle}>
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', 'rgba(30,30,30,0.5)', 'rgba(30,30,30,0.90)']}
                        locations={[0, 0.7, 0.95]}
                        style={styles.gradient}
                    />
                </View>

                <View style={styles.contentStyle}>
                    <View style={styles.overlay3}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500${movieItem.poster_path}` }}
                            style={styles.overlayImage}
                        />
                        <View style={styles.overlay4}>
                            <Text style={styles.title} adjustsFontSizeToFit numberOfLines={2}>{movieItem.title}</Text>
                            <View>
                                <View style={styles.iconRow}>
                                    <ActionIcons type="watched"
                                    id={movieItem.id}
                                    isAdded={isAddedWatched}
                                    setIsAdded={setIsAddedWatched} />

                                    <ActionIcons type="favorite"
                                    id={movieItem.id}
                                    isAdded={isAddedFavorite}
                                     setIsAdded={setAddedFavorite} />

                                    <ActionIcons type="watchLater"
                                    id={movieItem.id}
                                    isAdded={isAddedWatchLater}
                                    setIsAdded={setIsWatchLater} />
                                </View>
                                <View style={styles.iconRow}>
                                    <RatingStars movieId={movieItem.id} rating={rating} onRatingChange={setRating}/>
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
    contentStyle: {
        backgroundColor: 'rgba(30,30,30,0.90)',
        paddingHorizontal:5,
        paddingBottom:20,
    },
    gradientStyle: {
        height: '20%',
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
        paddingTop:10,
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
        paddingTop:30,
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
        marginLeft:'2%',
        marginBottom:'10%',
    },
    containerMain : {
        flexGrow:1,
        justifyContent:'flex-end',
    }
});

const IconStarFilled = () => (
    <MaterialIcons name="star" size={35} color="white" />
);
export default MoviePage;
