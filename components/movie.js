import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

function Movie(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Go Back")}
        style={styles.button}
      ></TouchableOpacity>
      <Image
          borderRadius={10}
          source={require("../assets/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.png")}
          resizeMode="cover"
          style={styles.image}
      ></Image>
      <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    left: 0,
    width: '50%',
    height: 170,
    position: "absolute",
    top: 0
  },
  image: {
    width: '80%',
    height: '80%'
  },
  loremIpsum: {

    color: "#121212"
  }
});

export default Movie;
