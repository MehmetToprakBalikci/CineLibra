// apiCalls.js

import { getGoogleBooksApiKey } from "./GoogleBooksApiKey"; // You should define this function to retrieve your API key

const searchBooksURL = 'https://www.googleapis.com/books/v1/volumes?q=';
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
