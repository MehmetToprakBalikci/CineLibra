// apiCalls.js

import { getGoogleBooksApiKey } from "./GoogleBooksApiKey";
import {fetchFavoriteMovieIDs, fetchWatchedMovieIDs, fetchWatchLaterMovieIDs} from "../../firebase";
import {fetchMovieDetails} from "../tmdbAPI/APICalls"; // You should define this function to retrieve your API key

const searchBooksURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const bookDetailsURL = 'https://www.googleapis.com/books/v1/volumes/';
const maxResults = 20;

const bookAPICall = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}

export const fetchBooksByQuery = (query) => {
    return bookAPICall(`${searchBooksURL}${encodeURIComponent(query)}&maxResults=${maxResults}&key=${getGoogleBooksApiKey()}`);
}

export const fetchBookDetails = (bookId) => {
    return bookAPICall(`${bookDetailsURL}${bookId}?key=${getGoogleBooksApiKey()}`);
}

export const fetchBooksByCategory = (category) => {
    return bookAPICall(`${searchBooksURL}subject:${encodeURIComponent(category)}&maxResults=${maxResults}&key=${getGoogleBooksApiKey()}`);
}

export const fetchNewBooks = () => {
    return bookAPICall(`${searchBooksURL}newest&orderBy=newest&maxResults=${maxResults}&key=${getGoogleBooksApiKey()}`);
}

export const fetchPopularBooks = () => {
    return bookAPICall(`${searchBooksURL}best+books&maxResults=${maxResults}&key=${getGoogleBooksApiKey()}`);
}

export const fetchWatchedBooks = async () => {
    const movieIDs = await fetchWatchedMovieIDs(1);
    const movieDetailsPromises = movieIDs.map(id => fetchBookDetails(id));
    const movieDetails = await Promise.all(movieDetailsPromises);
    return { results: movieDetails }; // Wrapping movieDetails in an object with a results key
}
export const fetchFavoritesBooks = async () => {
    const movieIDs = await fetchFavoriteMovieIDs(1);
    const movieDetailsPromises = movieIDs.map(id => fetchBookDetails(id));
    const movieDetails = await Promise.all(movieDetailsPromises);
    //console.log(movieDetails)
    return { results: movieDetails }; // Wrapping movieDetails in an object with a results key
}
export const fetchWatchLaterBooks = async () => {
    const movieIDs = await fetchWatchLaterMovieIDs(1);
    const movieDetailsPromises = movieIDs.map(id => fetchBookDetails(id));
    const movieDetails = await Promise.all(movieDetailsPromises);
    return { results: movieDetails }; // Wrapping movieDetails in an object with a results key
}