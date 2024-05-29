import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import { BookColors } from "../MoviePageComponents/colorProfile"
import BookCard from "./BookCard";
import {fetchNewBooks, fetchPopularBooks} from "../../api/bookAPI/BookAPICall";

const text_color_weak = BookColors.text_color_weak
const opacity_color = BookColors.opacity_color
const opacity_color_strong = BookColors.opacity_color_strong

const listTypes = {
    POPULAR: 'popular',
    NEW: 'new',
};

const List = ({ title, data }) => {
    return (
        <View style={styles.listContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.listTitle}>{title}</Text>
            </View>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => {
                    return <BookCard item={item} />;
                }}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const BookList = ({ listType }) => {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let data;
        switch (listType) {
            case listTypes.POPULAR:
                data = await fetchPopularBooks();
                //console.log(data);
                break;
            case listTypes.NEW:
                data = await fetchNewBooks();
                //console.log(data);
                break;
            default:
                data = [];
        }
        //setBookList(data.items || []);

        if (data.items) {
            const uniqueBooks = [];
            const bookIds = new Set();

            data.items.forEach((item) => {
                if (!bookIds.has(item.id)) {
                    bookIds.add(item.id);
                    uniqueBooks.push(item);
                }
            });

            //console.log("Unique Book IDs:", [...bookIds]);
            setBookList(uniqueBooks);
        } else {
            setBookList([]);
        }
    };

    return (
        <>
            {listType === listTypes.POPULAR && <List title="Popular Books" data={bookList} />}
            {listType === listTypes.NEW && <List title="New Publishes" data={bookList} />}
        </>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginHorizontal:5,
    },
    listTitle: {
        color: text_color_weak,
        fontSize: 16,
        fontWeight:'bold'
    },
    textContainer: {
        paddingHorizontal:'5%',
        paddingVertical:'2%',
        marginBottom:'3%',

        borderRadius:15,
        borderColor:opacity_color_strong,
        borderWidth: 2,
        backgroundColor:opacity_color,
    },
});
export default BookList;
export {listTypes};

