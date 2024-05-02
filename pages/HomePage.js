import React, { Component } from "react";
import {StyleSheet, View, Text, ImageBackground, SafeAreaView} from "react-native";
import SearchBar from "../components/searchBar";
import LeftBar from "../components/leftBar";
import Lists from "../components/lists";
import {useNavigation} from "@react-navigation/native";
export default function HomePage(props) {
  const background = require('../assets/bg.jpg')
  return (
    <ImageBackground source={background} blurRadius={200}>
      <SafeAreaView style={{}}>
        <View style={styles.leftBarRow}>
          <LeftBar style={styles.leftBar}></LeftBar>
        </View>

        <SearchBar style={styles.searchBar}></SearchBar>

        <Lists style={styles.lists}></Lists>
      </SafeAreaView>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  leftBar: {
    height: 41,
    width: 40
  },
  leftBarRow: {
    height: 41,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 17,
    marginRight: 136
  },
  searchBar: {
    height: 38,
    width: 344,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(15,15, 15,0.1)",
    marginTop: 18,
    marginLeft: 17
  },
  lists: {
    height: 637,
    width: 375,
    marginTop: 37
  }
});


