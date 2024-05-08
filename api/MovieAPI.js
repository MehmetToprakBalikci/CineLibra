import {getBearer} from "./Bearer";

export async function fetchMovieData(movieId) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: getBearer(),
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    if (!response.ok) {
        throw new Error('Failed to fetch movie data');
    }

    return await response.json();
}
