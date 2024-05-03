import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

function Movie(props) {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => console.log("Navigate to Go Back")}
        style={styles.imageButton}
      >
        <Image
            source={require("../assets/dune.png")}
            style={styles.image}
        />

      </TouchableOpacity>

      <Text style={styles.loremIpsum}>Lorem Ipsum</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width:130,
    flex:1
  },
  imageButton: {
    width: '95%',
    height: '90%',
    alignSelf:'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius:5
  },
  loremIpsum: {
    color: 'rgba(255, 255, 255, 1.0)'
  }
});

export default Movie;
