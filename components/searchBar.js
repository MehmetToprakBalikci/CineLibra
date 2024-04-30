import React, { Component } from "react";
import { StyleSheet, View, Text, Touchable, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";

function SearchBar(props) {
    const navigation = useNavigation()
  return (
    <View style={[styles.container, props.style]}>
      <KeyboardAvoidingView>
      <TextInput style={styles.search} placeholder = {'Search...'} />
      </KeyboardAvoidingView>

        <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
      <Icon name="magnify" style={styles.inputLeftIcon1}></Icon>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8
  },
  search: {
    color: "#121212",
    opacity: 0.6,
    margin: 10
  },
  inputLeftIcon1: {
    color: "#000",
    fontSize: 20,
    height: 22,
    width: 20,
    padding: 0,
    alignSelf: "center",
    margin: 10
  }
});

export default SearchBar;
