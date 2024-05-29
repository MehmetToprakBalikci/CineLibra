import React, { Component } from "react";
import { StyleSheet, View, Text, Touchable, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";

import {colors} from "./colorProfile"
const text_color = colors.text_color
const text_color_weak = colors.text_color_weak

function SearchBar(props) {
    const navigation = useNavigation()
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log("search bar clicked with query:", query);
        // Pass the query to the parent component
        if (props.onSearch) {
            props.onSearch(query);
        }
        navigation.navigate('SearchPage');
    };
  return (
    <View style={[styles.container, props.style]}>
      <KeyboardAvoidingView>
      <TextInput style={styles.search} placeholder = {'Search...'} placeholderTextColor={text_color_weak} onChangeText={setQuery} value={query}/>
      </KeyboardAvoidingView>

        <TouchableOpacity onPress={handleSearch}>
        <Icon name="magnify" style={styles.inputLeftIcon1}></Icon>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20
  },
  search: {
      color: text_color_weak,
      opacity: 0.9,
      marginLeft:10,
      flex:1,
      width:220
  },
  inputLeftIcon1: {
      color: text_color_weak,
      fontSize:20,
      alignSelf: "center",
      padding: 8,
  }
});

export default SearchBar;
