import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MovieList from "./movieList";

function Lists(props) {
  return (
    <View style={styles.container}>
      <MovieList style={styles.movieList} Text={'Popular Movies'}></MovieList>
      <MovieList style={styles.movieList} Text={'Latest Movies'}></MovieList>
      <MovieList style={styles.movieList} Text={'Recommended For You'}></MovieList>
    </View>
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
