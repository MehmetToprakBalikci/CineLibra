import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function leftBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconStack}>
        <Icon name="menu" style={styles.icon}></Icon>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Untitled")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 40,
    height: 41
  },
  button: {
    top: 0,
    left: 0,
    width: 40,
    height: 41,
    position: "absolute"
  },
  iconStack: {
    width: 40,
    height: 41
  }
});

export default leftBar;