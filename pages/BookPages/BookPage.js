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
import {fetchCastDetails} from "../../api/tmdbAPI/APICalls";
import BookCharacterProfile from "../../components/BookPageComponents/BookCharacterProfile";
import {BookColors} from "../../components/MoviePageComponents/colorProfile";
import ActionIcons from "../../components/MoviePageComponents/ActionIcons";
import RatingStars from "../../components/MoviePageComponents/RatingStars";
import { auth } from '../../firebase';
import {getDocs, doc, collection, query, where} from 'firebase/firestore';
import { db } from '../../firebase';
import fallbackImage from "../../assets/book.png";
import CastProfile from "../../components/MoviePageComponents/CastProfile";


const BookPage = () => {
    const route = useRoute();
    const { bookItem } = route.params;
    const navigation = useNavigation();
    const [isAddedWatched, setIsAddedWatched] = useState(false);
    const [isAddedFavorite, setAddedFavorite] = useState(false);
    const [isAddedWatchLater, setIsWatchLater] = useState(false);
    const [rating, setRating] = useState(0);

    useEffect(() => {
    }, []);

    const fetchMovieStates = async () => {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(db, "users", userId);

        try {
            // Fetch watched state
            const watchedCollectionRef = collection(userDocRef, "WatchedMovies");
            const watchedQuery = query(watchedCollectionRef, where("bookId", "==", bookItem.id));
            const watchedSnapshot = await getDocs(watchedQuery);
            if (!watchedSnapshot.empty) {
                setIsAddedWatched(true);
            }

            // Fetch favorite state
            const favoriteCollectionRef = collection(userDocRef, "favoriteMovies");
            const favoriteQuery = query(favoriteCollectionRef, where("bookId", "==", bookItem.id));
            const favoriteSnapshot = await getDocs(favoriteQuery);
            if (!favoriteSnapshot.empty) {
                setAddedFavorite(true);
            }

            // Fetch watch later state
            const watchLaterCollectionRef = collection(userDocRef, "WatchLaterMovies");
            const watchLaterQuery = query(watchLaterCollectionRef, where("bookId", "==", bookItem.id));
            const watchLaterSnapshot = await getDocs(watchLaterQuery);
            if (!watchLaterSnapshot.empty) {
                setIsWatchLater(true);
            }

            // Fetch rating state
            const ratingsCollectionRef = collection(userDocRef, "Ratings");
            const ratingQuery = query(ratingsCollectionRef, where("bookId", "==", bookItem.id));
            const ratingSnapshot = await getDocs(ratingQuery);
            if (!ratingSnapshot.empty) {
                setRating(ratingSnapshot.docs[0].data().rating);
            }
        } catch (error) {
            console.error('Error fetching book states:', error);
        }
    };

    const { title, authors, description, pageCount, imageLinks } = bookItem.volumeInfo;
    const imageSource = imageLinks?.thumbnail ? { uri: imageLinks.thumbnail } : fallbackImage;
    const background = require('../../assets/bg.jpg')

    return (
        <ImageBackground
            source={background}
            style={styles.background}
            blurRadius={30}
        >
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.overlay2}>
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', 'rgba(30,30,30,0.5)', 'rgba(30,30,30,0.90)']}
                        locations={[0, 0.7, 0.95]}
                        style={styles.gradient}
                    />
                </View>
                <View style={styles.overlay}>
                    <TouchableOpacity style={styles.navigationIcon} onPress={() => navigation.goBack()}>
                        <AntDesign name="back" size={34} color={BookColors.accent_strong} />
                    </TouchableOpacity>
                    <View style={styles.overlay3}>
                        <Image
                            source={ imageSource }
                            style={styles.overlayImage}
                        />
                        <View style={styles.overlay4}>
                            <Text style={styles.title} adjustsFontSizeToFit numberOfLines={2}>{title}</Text>
                            <View>
                                <View style={styles.iconRow}>
                                    <ActionIcons type="watched"
                                                 id={bookItem.id}
                                                 isAdded={isAddedWatched}
                                                 setIsAdded={setIsAddedWatched}
                                                 itemType={1}/>

                                    <ActionIcons type="favorite"
                                                 id={bookItem.id}
                                                 isAdded={isAddedFavorite}
                                                 setIsAdded={setAddedFavorite}
                                                 itemType={1}/>

                                    <ActionIcons type="watchLater"
                                                 id={bookItem.id}
                                                 isAdded={isAddedWatchLater}
                                                 setIsAdded={setIsWatchLater}
                                                 itemType={1}/>
                                </View>
                                <View style={styles.iconRow}>
                                    <RatingStars movieId={bookItem.id} rating={rating} onRatingChange={setRating} type={1}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    {authors && <Text style={styles.description}>{authors.join(', ')}</Text>}
                    {pageCount && <Text style={styles.description}>{pageCount} pages</Text>}
                    <View style={styles.descriptionView}>
                        <Text style={styles.description} >{description}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Cover the entire screen
    },
    scrollView: {
        flexGrow: 1,
        alignSelf:'flex-end',
        paddingBottom:'10%',
    },
    overlay: {
        height:'200%',
        width:windowWidth,
        backgroundColor: 'rgba(30,30,30,0.90)',
        paddingTop:20,
    },
    overlay2: {
        height: windowHeight*0.0,
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
        paddingTop: 20,
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
        borderColor: BookColors.accent_weak,
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
        paddingHorizontal:10,
        margin: 4,
        paddingTop:30,
        fontSize:17,
        color: '#fff', // Text color
    },
    descriptionView:{
        //backgroundColor: '#166',
        marginBottom:10,
    },
    navigationIcon: {
        height:45,
        width:45,
        marginTop:'10%',
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:3,
        marginHorizontal:'5%',
        backgroundColor:BookColors.opacity_color_strong,
        borderRadius:15,
        borderWidth:2,
        borderColor:BookColors.accent_strong
    },
});
const IconStarFilled = () => (
    <MaterialIcons name="star" size={35} color="white" />
);
export default BookPage;
