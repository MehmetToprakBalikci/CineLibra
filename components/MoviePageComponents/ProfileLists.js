import React, { Component } from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import MovieList, {listTypes} from "./MovieList";

function ProfileLists(props) {
    return (

        <ScrollView style={styles.container}>
            <MovieList listType={listTypes.TRENDING}></MovieList>
            <MovieList listType={listTypes.POPULAR}></MovieList>
            <MovieList listType={listTypes.NOW_PLAYING}></MovieList>
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

export default ProfileLists;
