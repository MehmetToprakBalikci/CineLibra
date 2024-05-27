import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchTrendingMovies} from "../../api/tmdbAPI/APICalls";
import MovieCard from "../MoviePageComponents/MovieCard";

import { BookColors } from "../MoviePageComponents/colorProfile"
import BookCard from "./BookCard";

const text_color_weak = BookColors.text_color_weak
const opacity_color = BookColors.opacity_color
const opacity_color_strong = BookColors.opacity_color_strong

const listTypes = {
    TRENDING: 'trending',
    POPULAR: 'popular',
    NOW_PLAYING: 'nowPlaying',
    TOP_RATED: 'topRated',
};

const List = ({ title, data }) => {
    return (
        <View style={styles.listContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.listTitle}>{title}</Text>
            </View>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => (
                    <BookCard item={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const BookList = ({ listType }) => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let data;
        switch (listType) {
            case listTypes.TRENDING:
                data = await fetchTrendingMovies();
                break;
            case listTypes.POPULAR:
                data = await fetchPopularMovies();
                break;
            case listTypes.NOW_PLAYING:
                data = await fetchNowPlayingMovies();
                break;
            case listTypes.TOP_RATED:
                data = await fetchTopRatedMovies();
                break;
            default:
                data = [];
        }
        setMovieList(data.results || []);
    };

    return (
        <>
            {listType === listTypes.TRENDING && <List title="Trending" data={movieList} />}
            {listType === listTypes.POPULAR && <List title="Popular Movies" data={movieList} />}
            {listType === listTypes.NOW_PLAYING && <List title="Now Playing" data={movieList} />}
            {listType === listTypes.TOP_RATED && <List title="Top Rated Movies" data={movieList} />}
        </>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginHorizontal:5,
    },
    listTitle: {
        color: text_color_weak,
        fontSize: 16,
        fontWeight:'bold'
    },
    textContainer: {
        paddingHorizontal:'5%',
        paddingVertical:'2%',
        marginBottom:'3%',

        borderRadius:15,
        borderColor:opacity_color_strong,
        borderWidth: 2,
        backgroundColor:opacity_color,
    },
});
export default BookList;
export {listTypes};

