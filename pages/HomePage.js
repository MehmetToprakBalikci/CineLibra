import React, { Component } from "react";
import {StyleSheet, View, Text, ImageBackground, SafeAreaView} from "react-native";
import SearchBar from "../components/searchBar";
import Lists from "../components/lists";
import LeftBar from "../components/LeftBar";
export default function HomePage(props) {
  const background = require('../assets/bg.jpg')
  return (
    <ImageBackground source={background} blurRadius={200} style={{flex:1}}>

      <SafeAreaView style={styles.safeArea}>

        <View style={styles.leftBarRow}>
        <LeftBar/>
          <SearchBar style={styles.searchBar} value={'Search'}></SearchBar>
        </View>

        <View style={styles.listView}>
          <Lists style={styles.lists}></Lists>
        </View>

      </SafeAreaView>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftBarRow: {
    height: '7%',
    flexDirection: "row",
    marginHorizontal: '5%',
    justifyContent:'space-between'
  },
  searchBar: {
    height: '80%',
    width: '80%',
    backgroundColor: "rgba(0, 0, 0 ,0.3)",
  },
  lists: {
    height: '100%',
    width: '100%',
  },
  listView: {
    flex:1
  },
  safeArea: {
    flex:1,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
  }
});