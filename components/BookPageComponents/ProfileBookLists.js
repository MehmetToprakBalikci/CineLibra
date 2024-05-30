import React, { Component } from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import BookList, {listTypes} from "./BookList";

function ProfileBookLists(props) {

    return (

        <ScrollView style={styles.container}>
            {/* <MovieList listType={listTypes.TRENDING}></MovieList>
            <MovieList listType={listTypes.POPULAR}></MovieList>
            <MovieList listType={listTypes.NOW_PLAYING}></MovieList> */}

            {/* <MovieList listType={listTypes.TRENDING}></MovieList> */}
            <BookList listType={listTypes.FAVORITES}></BookList>
            <BookList listType={listTypes.WATCHED}></BookList>
            <BookList listType={listTypes.WATCHLATER}></BookList>
            {/* <MovieList listType={listTypes.RATED}></MovieList>  */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    movieList: {
        height: '100%',
    }
});

export default ProfileBookLists;
