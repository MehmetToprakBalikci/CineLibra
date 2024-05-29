import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {
    fetchFavoriteMovies,
    fetchWatchedMovies,
    fetchWatchLaterMovies,
    fetchNowPlayingMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchTrendingMovies,
    fetchMovieSearch
} from "../../api/tmdbAPI/APICalls";
import MovieCard from "./MovieCard";

import { colors } from "./colorProfile"

const text_color_weak = colors.text_color_weak
const opacity_color = colors.opacity_color
const opacity_color_strong = colors.opacity_color_strong
let isFetchingData = false

const listTypes = {
  TRENDING: 'trending',
  POPULAR: 'popular',
  NOW_PLAYING: 'nowPlaying',
  TOP_RATED: 'topRated',
  FAVORITES: 'favorites',
  WATCHED: 'watched',
  WATCHLATER: 'watchLater'
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
            renderItem={({ item }) => (
                <MovieCard item={item} />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
        />
      </View>
  );
};

const MovieList = ({ listType }) => {
  const [movieList, setMovieList] = useState([]);
  // State variables for caching
 const [watchedData, setWatchedData] = useState(null);
 const [watchLaterData, setWatchLaterData] = useState(null);
 const [favoriteData, setFavoriteData] = useState(null);

  useEffect(() => {
    isFetchingData = true;
    fetchData()
  }, []);

  const fetchData = async () => {
    let data;
    switch (listType) {
      case listTypes.TRENDING:
        data = await fetchTrendingMovies();
        // console.log("trending data IDs:", data.results.map(movie => movie.id));
       break;
      case listTypes.POPULAR:
        data = await fetchPopularMovies();
        break;
      case listTypes.NOW_PLAYING:
        data = await fetchNowPlayingMovies();
        break;
      case listTypes.TOP_RATED:
        data = await fetchTopRatedMovies();
       break;
       case listTypes.WATCHED:
        if (!watchedData) {
         // console.log("cache uok");          
            data = await fetchWatchedMovies();
            setWatchedData(data);
            console.log("cache testi1: "+watchedData);
        } else {
            data = watchedData;
            console.log("cache testi2: "+watchedData);
        }
        break;
        case listTypes.FAVORITES:
        if (!favoriteData) {
            data = await fetchFavoriteMovies();
            setFavoriteData(data);
        } else {
            data = favoriteData;
        }
        break;
        case listTypes.WATCHLATER:
        if (!watchLaterData) {
            data = await fetchWatchLaterMovies();
            setWatchLaterData(data);
        } else {
            data = watchLaterData;
        }
        break;
    default:
        data = [];
    }
     setMovieList(data.results || []);
    isFetchingData = false;
  };

  return (
      <>
        {listType === listTypes.TRENDING && <List title="Trending" data={movieList} />}
        {listType === listTypes.POPULAR && <List title="Popular Movies" data={movieList} />}
        {listType === listTypes.NOW_PLAYING && <List title="Now Playing" data={movieList} />}
        {listType === listTypes.TOP_RATED && <List title="Top Rated Movies" data={movieList} />}
         {listType === listTypes.FAVORITES && <List title="Favorites" data={movieList} />} 
        {listType === listTypes.WATCHED && <List title="Watched List" data={movieList} />}
         {listType === listTypes.WATCHLATER && <List title="WatchLater" data={movieList} />} 
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
export default MovieList;
export {listTypes};