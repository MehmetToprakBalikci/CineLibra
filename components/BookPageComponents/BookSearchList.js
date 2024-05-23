import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Movie from "../MoviePageComponents/Movie";

import { BookColors } from "../MoviePageComponents/colorProfile"

const text_color_weak = BookColors.text_color_weak
const text_color = BookColors.text_color
const opacity_color = BookColors.opacity_color
const opacity_color_strong = BookColors.opacity_color_strong

function BookSearchList(props) {
    return (
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.listName}>{props.Text}</Text>
            </View>

            <ScrollView
                horizontal={false}
                style={{height:'100%'}}
            >
                <View style={styles.poster}>
                    <Movie style={styles.movie}/>

                    <View style={styles.descriptionBox}>
                        <Text style={styles.description}>Hello</Text>
                    </View>

                </View>
                <View style={styles.poster}>
                    <Movie style={styles.movie}/>

                    <View style={styles.descriptionBox}>
                        <Text style={styles.description}>Hello</Text>
                    </View>

                </View>
                <View style={styles.poster}>
                    <Movie style={styles.movie}/>

                    <View style={styles.descriptionBox}>
                        <Text style={styles.description}>Hello</Text>
                    </View>

                </View>
                <View style={styles.poster}>
                    <Movie style={styles.movie}/>

                    <View style={styles.descriptionBox}>
                        <Text style={styles.description}>Hello</Text>
                    </View>

                </View>
                <View style={styles.poster}>
                    <Movie style={styles.movie}/>

                    <View style={styles.descriptionBox}>
                        <Text style={styles.description}>Hello</Text>
                    </View>

                </View>
                <View style={styles.poster}>
                    <Movie style={styles.movie}/>

                    <View style={styles.descriptionBox}>
                        <Text style={styles.description}>Hello</Text>
                    </View>

                </View>
                <View style={styles.poster}>
                    <Movie style={styles.movie}/>

                    <View style={styles.descriptionBox}>
                        <Text style={styles.description}>Hello</Text>
                    </View>

                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    listName: {
        color: text_color_weak,
        fontSize: 16,
        fontWeight:'bold'
    },
    textContainer: {
        paddingHorizontal:'5%',
        paddingVertical:'2%',
        marginBottom:'1%',
        marginHorizontal:'1%',
        borderRadius:15,
        borderColor:opacity_color_strong,
        borderWidth: 2,
        backgroundColor:opacity_color,
    },
    poster: {
        maxWidth:'98%',
        maxHeight: 200,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'2%',
        marginVertical:4,
        height: 200,
        backgroundColor:opacity_color,
        borderRadius:15,
        paddingHorizontal:'2%',
        paddingVertical:'2%',
    },
    descriptionBox: {
        width:'60%',
        marginRight:'2%',
        marginLeft:'2%',
    },
    description: {
        color: text_color_weak,
    },
    movie: {

    }
});

export default BookSearchList;
