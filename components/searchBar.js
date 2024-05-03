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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20
  },
  search: {
    color: 'rgba(255, 255, 255, 0.6)',
    opacity: 0.6,
    margin: 10
  },
  inputLeftIcon1: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize:20,
    alignSelf: "center",
    margin: 8,
  }
});

export default SearchBar;
