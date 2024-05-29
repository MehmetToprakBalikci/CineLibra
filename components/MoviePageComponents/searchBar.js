import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Touchable, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";

import {colors} from "./colorProfile"
const text_color = colors.text_color
const text_color_weak = colors.text_color_weak
const handleSearch = () => {
    props.onSearch(searchQuery);
};

const getSearchQuery = () => {
    return searchQuery;
};

function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation()

  return (
    <View style={[styles.container, props.style]}>
      <KeyboardAvoidingView>
      <TextInput style={styles.search} placeholder = {'Search...'} placeholderTextColor={text_color_weak} value={searchQuery} onChangeText={setSearchQuery}/>
      </KeyboardAvoidingView>

        <TouchableOpacity onPress={() => {console.log("search bar movidekine tıklandıı");navigation.navigate('SearchPage')}}>
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
      paddingRight:'65%',
      flex:1,
  },
  inputLeftIcon1: {
      color: text_color_weak,
      fontSize:20,
      alignSelf: "center",
      padding: 8,
  }
});

export default SearchBar;
export {getSearchQuery};
