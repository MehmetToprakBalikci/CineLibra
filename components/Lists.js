import React, { Component } from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import MovieList, {listTypes} from "./MovieList";
import listItem from "react-native-paper/src/components/List/ListItem";

function Lists(props) {
  return (
    <ScrollView style={styles.container}>
      <MovieList listType={listTypes.TRENDING}></MovieList>
      <MovieList listType={listTypes.POPULAR}></MovieList>
      <MovieList listType={listTypes.NOW_PLAYING}></MovieList>
      <MovieList listType={listTypes.TOP_RATED}></MovieList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      padding: 10,
  },
  movieList: {
      height: '100%',
  }
});

export default Lists;
