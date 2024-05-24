import React, { Component, useState } from "react";
import {StyleSheet, View, Text, ImageBackground, SafeAreaView} from "react-native";
import LeftBar from "../components/MoviePageComponents/LeftBar";
import { useNavigation } from "@react-navigation/native";
import { BookColors } from "../components/MoviePageComponents/colorProfile";
import BookLists from "../components/BookPageComponents/BookLists";

import BookSearchBar2 from "./screenComponent/bookSearchBar2";

const bg_filter_color = BookColors.bg_filter_color
const opacity_color = BookColors.opacity_color


export default function BookSearchDrawer(props) {
    const navigation = useNavigation();
    const background = require('../assets/bg.jpg')
    console.log("book search drawer içindeyiiiim");
    return (
        <ImageBackground source={background} blurRadius={200} style={{flex:1}}>
            <SafeAreaView style={styles.safeArea}>

                <View style={styles.leftBarRow}>
                    <LeftBar/>
                    <BookSearchBar2 style={styles.searchBar} value={'SearchHome'}></BookSearchBar2>
                    <View>


                    </View>

                </View>

                <View style={styles.listView}>
                    <BookLists style={styles.lists}></BookLists>
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
