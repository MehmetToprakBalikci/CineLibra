import React, {Component, useEffect, useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Platform,
    StatusBar,
    Dimensions, FlatList
} from "react-native";
import SearchBar from "../../components/MoviePageComponents/searchBar";
import LeftBar from "../../components/MoviePageComponents/LeftBar";
import {useNavigation} from "@react-navigation/native";
import {BookColors} from "../../components/MoviePageComponents/colorProfile"
import { auth } from "../../firebase";
import {fetchCastDetails, fetchMovieSearch} from "../../api/tmdbAPI/APICalls";
import MovieList, {listTypes} from "../../components/MoviePageComponents/MovieList";
import Movie from "../../components/MoviePageComponents/Movie";
import {defaultProps as movieItem} from "react-native-web/src/modules/forwardedProps";
import MovieCard from "../../components/MoviePageComponents/MovieCard";
import movie from "../../components/MoviePageComponents/Movie";
import BookSearchBar from "../../components/BookPageComponents/BookSearchBar";
import BookCard from "../../components/BookPageComponents/BookCard";
import {fetchBooksByQuery} from "../../api/bookAPI/BookAPICall";

const bg_filter_color = BookColors.bg_filter_color
const opacity_color = BookColors.opacity_color
const windowHeight = Dimensions.get('window').height;
export default function SearchPage(props) {
    const background = require('../../assets/bg.jpg')
    const [bookList, setBookList] = useState([]);
    let searchQuery;

    useEffect(() => {
        // Initial fetch, empty search query
        fetchSearch("");
    }, []);

    const fetchSearch = async (searchQuery) => {
        let data;
        try {
            data = await fetchBooksByQuery(searchQuery);
            console.log(data);


        } catch (error) {
            console.error('Error fetching cast:', error);
        }

        setBookList(data || []);
    };

    const List = ({ title, data}) => {
        return (
            <View style={styles.listContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.listName}>{title}</Text>
                </View>
                <FlatList
                    //horizontal
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                            <BookCard item={item} />
                            <View style={{backgroundColor:BookColors.opacity_color, borderRadius:15, marginBottom:'3%', flex:1, borderWidth:2, borderColor:BookColors.opacity_color_strong}}>
                                //<Text style={{color: BookColors.text_color_weak, margin:20,}} numberOfLines={7} ellipsizeMode="tail">{item.volumeInfo}</Text>
                                //<Text style={{color: BookColors.text_color_weak, margin:20, fontSize:18}}>{item.releaseDate}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    };

    const handleSearchQuery = (query) => {
        console.log("Search query:", query);
        fetchSearch(query);
        // You can perform further actions with the search query here
    };

    //  console.log(auth.currentUser.email+" is in searchpage now");
    return (
        <ImageBackground source={background} blurRadius={200} style={{flex:1}}>

            <SafeAreaView style={styles.safeArea}>
                <View style={styles.innerContainer}>
                    <View style={styles.leftBarRow}>
                        <LeftBar/>
                        <BookSearchBar onSearch={handleSearchQuery} style={styles.searchBar} value={'Search'}></BookSearchBar>
                    </View>

                    <View style={styles.listView}>
                        <View>
                            <List title="Search Results" data={bookList} />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leftBarRow: {
        height: '7%',
        flexDirection: "row",
        marginHorizontal: '5%',
        justifyContent:'space-between'
    },
    searchBar: {
        height: '80%',
        width: '80%',
        backgroundColor: opacity_color,
    },
    lists: {
        height: '100%',
        width: '100%',
    },
    listView: {
        flex:1
    },
    safeArea: {
        minHeight:windowHeight,
        flex:1,
        backgroundColor:bg_filter_color,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+20 : 0,
    },
    innerContainer: {
        flex:1,
        marginHorizontal:10,
        marginBottom:10,
    },
    textContainer: {
        paddingHorizontal:'5%',
        paddingVertical:'2%',
        marginBottom:'2%',
        borderRadius:15,
        borderColor:BookColors.opacity_color_strong,
        borderWidth: 2,
        backgroundColor:opacity_color,
    },
    listName: {
        color: BookColors.text_color_weak,
        fontSize: 16,
        fontWeight:'bold'
    },
});
