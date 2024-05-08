//ListsAPI.js
const trendingMoviesURL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
const popularMoviesURL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
const nowPlayingMoviesURL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
const topRatedMoviesURL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

const apiCall = async (url) =>{
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjU4MDI2YTBhMDcyNTQzMDg4ODRjOWE2ODgyM2MzOSIsInN1YiI6IjY2MTEyZGI0ZGY4NmE4MDE3ZTUzODMxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NrSYIefq_A2a-H1JWBVnEztZwoA7_tUZMYA6onz2Ogs'
        }
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        return data;
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