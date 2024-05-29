import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import BookList, {listTypes} from "./BookList";

function BookLists() {
    return (
        <ScrollView style={styles.container}>
            <BookList listType={listTypes.POPULAR}></BookList>
            <BookList listType={listTypes.NEW}></BookList>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    movieList: {
        height: '100%',
    }
});

export default BookLists;
