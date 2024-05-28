import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LeftBar from '../components/MoviePageComponents/LeftBar'
import SearchBar2 from './screenComponent/SearchBar2'
import { colors } from '../components/MoviePageComponents/colorProfile'
import {StyleSheet, View, Text, ImageBackground, SafeAreaView} from "react-native";
import Lists from '../components/MoviePageComponents/Lists'
const bg_filter_color = colors.bg_filter_color
const opacity_color = colors.opacity_color

export const CustomMovieSearchScreen = () => {

  const navigation = useNavigation();
    const background = require('../assets/bg_alt.jpg')

    navigation.reset({
      index: 0,
      routes: [{ name: 'HomePage' }],
    });
    return (
      <ImageBackground source={background} blurRadius={200} style={{flex:1}}>
        <SafeAreaView style={styles.safeArea}>

          <View style={styles.leftBarRow}>
          <LeftBar/>
            <SearchBar2 style={styles.searchBar} value={'SearchHome2'}></SearchBar2>
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
