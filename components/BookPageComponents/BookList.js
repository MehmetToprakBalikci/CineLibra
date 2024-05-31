import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import { BookColors } from "../MoviePageComponents/colorProfile"
import BookCard from "./BookCard";
import {
    fetchFavoritesBooks,
    fetchNewBooks,
    fetchPopularBooks,
    fetchWatchedBooks,
    fetchWatchLaterBooks
} from "../../api/bookAPI/BookAPICall";

const text_color_weak = BookColors.text_color_weak
const opacity_color = BookColors.opacity_color
const opacity_color_strong = BookColors.opacity_color_strong

const listTypes = {
    POPULAR: 'popular',
    NEW: 'new',
    WATCHED: 'watched',
    FAVORITES: 'favorites',
    WATCHLATER: 'watchLater',
};

const List = ({ title, data }) => {
    //console.log('List component rendered with data:', data);
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
            case listTypes.WATCHED:
                data = await fetchWatchedBooks();
                //console.log(data);
                break;
            case listTypes.FAVORITES:
                data = await fetchFavoritesBooks();
                //console.log(data);
                break;
            case listTypes.WATCHLATER:
                data = await fetchWatchLaterBooks();
                console.log(data);
                break;
            default:
                data = [];
        }

        const items = data.items || data.results;

        if (items) {
            const uniqueBooks = [];
            const bookIds = new Set();

            items.forEach((item) => {
                if (!bookIds.has(item.id)) {
                    bookIds.add(item.id);
                    uniqueBooks.push(item);
                }
            });
            setBookList(uniqueBooks);
        } else {

            setBookList([]);
        }
    };
    //console.log(bookList) // It logs data
    return (
        <>
            {listType === listTypes.POPULAR && <List title="Popular Books" data={bookList} />}
            {listType === listTypes.NEW && <List title="New Publishes" data={bookList} />}
            {listType === listTypes.FAVORITES && <List title="Favorites" data={bookList} />}
            {listType === listTypes.WATCHLATER && <List title="Read Later" data={bookList} />}
            {listType === listTypes.WATCHED && <List title="Read" data={bookList} />}
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

