import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Movie from "./movie";

function MovieList(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.listName}>{props.Text}</Text>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.movieRow}>
            <Movie style={styles.movie}></Movie>
            <Movie style={styles.movie2}></Movie>
            <Movie style={styles.movie3}></Movie>
            <Movie style={styles.movie4}></Movie>
            <Movie style={styles.movie5}></Movie>
            <Movie style={styles.movie6}></Movie>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  listName: {
    color: "#121212",
    margin: 0,
    padding: 0,
    paddingRight: 0,
    paddingBottom: 0,
    textAlign: "center",
    fontSize: 16,
    height: 21,
    alignSelf: "flex-start",
    fontWeight:'bold'
  },
  scrollArea: {
    width: 450,
    height: 170
  },
  scrollArea_contentContainerStyle: {
    width: 720,
    height: 170,
    flexDirection: "row"
  },
  movie: {
    width: 120,
    height: 170
  },
  movie2: {
    width: 120,
    height: 170
  },
  movie3: {
    width: 120,
    height: 170
  },
  movie4: {
    width: 120,
    height: 170
  },
  movie5: {
    width: 120,
    height: 170
  },
  movie6: {
    width: 120,
    height: 170
  },
  movieRow: {
    height: 170,
    flexDirection: "row",
    flex: 1,
    marginRight: -270
  }
});

export default MovieList;
