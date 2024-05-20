import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import MovieList, {listTypes} from "./MovieList";

function Lists() {
  return (
    <ScrollView style={styles.container}>
        <MovieList listType={listTypes.TRENDING}></MovieList>
        <MovieList listType={listTypes.POPULAR}></MovieList>
        <MovieList listType={listTypes.TOP_RATED}></MovieList>
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

export default Lists;
