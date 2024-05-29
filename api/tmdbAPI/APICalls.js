import { fetchFavoriteMovieIDs, fetchWatchLaterMovieIDs, fetchWatchedMovieIDs } from "../../firebase";
import {getBearer} from "./Bearer";

const trendingMoviesURL = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
const popularMoviesURL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
const nowPlayingMoviesURL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
const topRatedMoviesURL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

const apiCall = async (url) =>{
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: getBearer(),
        }
    }

    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}

export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesURL);
}
export const fetchPopularMovies = ()=>{
    return apiCall(popularMoviesURL);
}
export const fetchNowPlayingMovies = ()=>{
    return apiCall(nowPlayingMoviesURL);
}
export const fetchTopRatedMovies = ()=>{
    return apiCall(topRatedMoviesURL);
}
export const fetchFavoriteMovies = async ()=>{
    const movieIDs = await fetchFavoriteMovieIDs();
    const movieDetailsPromises = movieIDs.map(id => fetchMovieDetails(id));
    const movieDetails = await Promise.all(movieDetailsPromises);
    return { results: movieDetails }; // Wrapping movieDetails in an object with a results key
};
export const fetchWatchedMovies = async ()=>{
    const movieIDs = await fetchWatchedMovieIDs();
    const movieDetailsPromises = movieIDs.map(id => fetchMovieDetails(id));
    const movieDetails = await Promise.all(movieDetailsPromises);
    return { results: movieDetails }; // Wrapping movieDetails in an object with a results key
};
export const fetchWatchLaterMovies = async ()=>{
    const movieIDs = await fetchWatchLaterMovieIDs();
    const movieDetailsPromises = movieIDs.map(id => fetchMovieDetails(id));
    const movieDetails = await Promise.all(movieDetailsPromises);
    return { results: movieDetails }; // Wrapping movieDetails in an object with a results key
};
 

export const fetchMovieDetails = (movieId) =>{
    return apiCall(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`);
}

export const fetchCastDetails = (movieId) =>{
    return apiCall(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`);
}

export const fetchMovieSearch = (searchQuery) =>{
    return apiCall(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`)
}