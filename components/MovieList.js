import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchTrendingMovies} from "../api/ListsAPI";
import MovieCard from "./MovieCard";

const listTypes = {
  TRENDING: 'trending',
  POPULAR: 'popular',
  NOW_PLAYING: 'nowPlaying',
  TOP_RATED: 'topRated',
};

const List = ({ title, data }) => {
  return (
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>{title}</Text>
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data;
    switch (listType) {
      case listTypes.TRENDING:
        data = await fetchTrendingMovies();
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
      default:
        data = [];
    }
    setMovieList(data.results || []);
  };

  return (
      <>
        {listType === listTypes.TRENDING && <List title="Trending" data={movieList} />}
        {listType === listTypes.POPULAR && <List title="Popular Movies" data={movieList} />}
        {listType === listTypes.NOW_PLAYING && <List title="Now Playing" data={movieList} />}
        {listType === listTypes.TOP_RATED && <List title="Top Rated Movies" data={movieList} />}
      </>
  );
};

const windowWidth = Dimensions.get('window').width;
const numMoviesPerLine = 5; // Number of movies you want to show in one line

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default MovieList;
export {listTypes};

/*
TODO: OLD MOVIE LIST

import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Movie from "./Movie";

import { colors } from "./colorProfile"

const text_color_weak = colors.text_color_weak
const opacity_color = colors.opacity_color
const opacity_color_strong = colors.opacity_color_strong

function MovieList(props) {
  return (
      <View style={styles.container}>

        <View style={styles.textContainer}>
          <Text style={styles.listName}>{props.Text}</Text>
        </View>

          <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
          >
            <View style={styles.movieRow}>
              <Movie/>
              <Movie/>
              <Movie/>
              <Movie/>
              <Movie/>
              <Movie/>
            </View>

          </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  listName: {
    color: text_color_weak,
    fontSize: 16,
    fontWeight:'bold'
  },
  movieRow: {
    height: '95%',
    flexDirection: "row",
    flex: 1,
    marginVertical:'1%',
  },
  textContainer: {
    paddingHorizontal:'5%',
    paddingVertical:'2%',
    marginHorizontal:'1%',
    borderColor:opacity_color_strong,
    borderWidth: 2,
    borderRadius:15,
    backgroundColor: opacity_color,
  },
});

export default MovieList;
*/