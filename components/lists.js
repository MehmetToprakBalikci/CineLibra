import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MovieList from "./movieList";

function Lists(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MovieList style={styles.movieList} Text={'Popular Movies'}></MovieList>
      <MovieList style={styles.movieList} Text={'Latest Movies'}></MovieList>
      <MovieList style={styles.movieList} Text={'Recommended For You'}></MovieList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  movieList: {
    width: 450,
    height: 200,
    margin: 0,
  },
  movieList2: {
    width: 450,
    height: 200,
    margin: 0
  },
  movieList3: {
    width: 450,
    height: 200,
    margin: 0
  }
});

export default Lists;