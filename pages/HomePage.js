import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/searchBar";
import LeftBar from "../components/leftBar";
import Lists from "../components/lists";
import {useNavigation} from "@react-navigation/native";
export default function HomePage(props) {
  return (
    <View style={styles.container}>
    <View style={styles.leftBarRow}>
      <LeftBar style={styles.leftBar}></LeftBar>
      <Text style={styles.cinelibra}>CINELIBRA</Text>
    </View>
    <SearchBar style={styles.searchBar}></SearchBar>
    <Lists style={styles.lists}></Lists>
  </View>
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
  cinelibra: {
    color: "rgba(0,0,0,1)",
    height: 34,
    width: 104,
    fontSize: 20,
    textAlign: "center",
    marginLeft: 85,
    marginTop: 15,
    fontWeight:'bold'
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


