export async function fetchMovieData(movieId) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjU4MDI2YTBhMDcyNTQzMDg4ODRjOWE2ODgyM2MzOSIsInN1YiI6IjY2MTEyZGI0ZGY4NmE4MDE3ZTUzODMxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NrSYIefq_A2a-H1JWBVnEztZwoA7_tUZMYA6onz2Ogs'
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    if (!response.ok) {
        throw new Error('Failed to fetch movie data');
    }

    return await response.json();
}
