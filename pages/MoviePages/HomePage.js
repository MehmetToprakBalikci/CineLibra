import React, { Component, useState } from "react";
import {StyleSheet, View, Text, ImageBackground, SafeAreaView} from "react-native";
import SearchBar from "../../components/MoviePageComponents/searchBar";
import Lists from "../../components/MoviePageComponents/Lists";
import LeftBar from "../../components/MoviePageComponents/LeftBar";
import { useNavigation } from "@react-navigation/native";
import {colors} from "../../components/MoviePageComponents/colorProfile"
import { Button } from "react-native-web";

const bg_filter_color = colors.bg_filter_color
const opacity_color = colors.opacity_color


export default function HomePage(props) {
  const navigation = useNavigation();
  const background = require('../../assets/bg_alt.jpg')
  console.log("HomePage movie içindeyiiiim");
  return (
    <ImageBackground source={background} blurRadius={200} style={{flex:1}}>
      <SafeAreaView style={styles.safeArea}>

        <View style={styles.leftBarRow}>
        <LeftBar/>
          <SearchBar style={styles.searchBar} value={'SearchHome'}></SearchBar>
          <View>


          </View>

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
    marginHorizontal: '3%',
    justifyContent:'space-between'
  },
  searchBar: {
    height: '80%',
    width: '80%',
    backgroundColor: opacity_color,
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
    backgroundColor:bg_filter_color,
  }
});
