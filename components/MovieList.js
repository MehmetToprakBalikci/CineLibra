import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Movie from "./Movie";

import { colors } from "./colorProfile"

const text_color_weak = colors.text_color_weak
const opacity_color = colors.opacity_color
const opacity_color_strong = colors.opacity_color_strong

function MovieList(props) {
  return (
      <View style={styles.container}>

        <View style={styles.textContainer}>
          <Text style={styles.listName}>{props.Text}</Text>
        </View>

          <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
          >
            <View style={styles.movieRow}>
              <Movie/>
              <Movie/>
              <Movie/>
              <Movie/>
              <Movie/>
              <Movie/>
            </View>

          </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  listName: {
    color: text_color_weak,
    fontSize: 16,
    fontWeight:'bold'
  },
  movieRow: {
    height: '95%',
    flexDirection: "row",
    flex: 1,
    marginVertical:'1%',
  },
  textContainer: {
    paddingHorizontal:'5%',
    paddingVertical:'2%',
    marginHorizontal:'1%',
    borderColor:opacity_color_strong,
    borderWidth: 2,
    borderRadius:15,
    backgroundColor: opacity_color,
  },
});

export default MovieList;
