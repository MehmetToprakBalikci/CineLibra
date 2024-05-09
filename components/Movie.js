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
  },
  imageButton: {
    width: '95%',
    height: '90%',
    alignSelf:'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius:15,
    borderColor:'rgba(190, 190, 190, 1)',
    borderWidth:1,
  },
  loremIpsum: {
    color: 'rgba(255, 255, 255, 0.6)',
  }
});

export default Movie;
