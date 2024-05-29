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
import {colors} from "../../components/MoviePageComponents/colorProfile"
import { auth } from "../../firebase";
import {fetchCastDetails, fetchMovieSearch} from "../../api/tmdbAPI/APICalls";
import MovieList, {listTypes} from "../../components/MoviePageComponents/MovieList";
import Movie from "../../components/MoviePageComponents/Movie";
import {defaultProps as movieItem} from "react-native-web/src/modules/forwardedProps";
import MovieCard from "../../components/MoviePageComponents/MovieCard";
import movie from "../../components/MoviePageComponents/Movie";

const bg_filter_color = colors.bg_filter_color
const opacity_color = colors.opacity_color
const windowHeight = Dimensions.get('window').height;
export default function SearchPage(props) {
    const background = require('../../assets/bg_alt.jpg')
    const [movieList, setMovieList] = useState([]);
    let searchQuery;

    useEffect(() => {
        fetchSearch(searchQuery);
    }, []);

    const fetchSearch = async (searchQuery) => {
        let data;
        //searchQuery = 'dune';
        try {
            data = await fetchMovieSearch(searchQuery);
            console.log(data.results);


        } catch (error) {
            console.error('Error fetching cast:', error);
        }

        setMovieList(data.results || []);
    };

    const List = ({ title, data }) => {
        return (
            <View style={styles.listContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.listTitle}>{title}</Text>
                </View>
                <FlatList
                    //horizontal
                    data={data}
                    renderItem={({ item }) => (
                        <MovieCard item={item} />
                    )}
                    // keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    };


  //  console.log(auth.currentUser.email+" is in searchpage now");
    return (
        <ImageBackground source={background} blurRadius={200} style={{flex:1}}>

            <SafeAreaView style={styles.safeArea}>

                <View style={styles.leftBarRow}>
                    <LeftBar/>
                    <SearchBar style={styles.searchBar} value={'Search'}></SearchBar>
                </View>

                <View style={styles.listView}>
                    <View>
                        <List title="Search Results" data={movieList} />
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
    }
});
