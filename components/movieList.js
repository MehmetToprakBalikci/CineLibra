import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Movie from "./movie";

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
    color: 'rgba(255, 255, 255, 1.0)',
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
    borderBottomColor:'rgba(20, 20, 20, 0.5)',
    borderTopColor:'rgba(20, 20, 20, 0.5)',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    backgroundColor:'rgba(0, 0, 0, 0.3)',
  }
});

export default MovieList;
