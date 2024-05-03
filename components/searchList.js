import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Movie from "./movie";

function searchList(props) {
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
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 16,
        fontWeight:'bold'
    },
    textContainer: {
        paddingHorizontal:'5%',
        paddingVertical:'2%',
        marginBottom:'1%',
        borderBottomColor:'rgba(20, 20, 20, 0.5)',
        borderTopColor:'rgba(20, 20, 20, 0.5)',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        backgroundColor:'rgba(0, 0, 0, 0.3)',
    },
    poster: {
        maxWidth:'98%',
        maxHeight: 200,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'2%',
        marginVertical:4,
        height: 200,
        backgroundColor:'rgba(0, 0, 0, 0.3)',
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
        color: 'rgba(255, 255, 255, 0.6)',
    },
    movie: {

    }
});

export default searchList;
