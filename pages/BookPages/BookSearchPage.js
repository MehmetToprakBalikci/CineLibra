import React, { Component } from "react";
import {StyleSheet, View, Text, ImageBackground, SafeAreaView, ScrollView} from "react-native";
import LeftBar from "../../components/MoviePageComponents/LeftBar";
import {useNavigation} from "@react-navigation/native";
import SearchList from "../../components/MoviePageComponents/searchList";
import {BookColors} from "../../components/MoviePageComponents/colorProfile"
import { auth } from "../../firebase";
import BookSearchBar from "../../components/BookPageComponents/BookSearchBar";
import BookSearchList from "../../components/BookPageComponents/BookSearchList";

const bg_filter_color = BookColors.bg_filter_color
const opacity_color = BookColors.opacity_color
export default function bookSearchPage(props) {
    const background = require('../../assets/bg.jpg')
    //console.log(auth.currentUser.email+" is in booksearchpage now");
    return (
        <ImageBackground source={background} blurRadius={200} style={{flex:1}}>

            <SafeAreaView style={styles.safeArea}>

                <View style={styles.leftBarRow}>
                    <LeftBar/>
                    <BookSearchBar style={styles.searchBar} value={'Search'}></BookSearchBar>
                </View>

                <View style={styles.listView}>
                    <BookSearchList Text={'Results'}></BookSearchList>
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
