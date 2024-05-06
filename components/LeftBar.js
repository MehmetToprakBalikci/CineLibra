import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import {colors} from "./colorProfile"

const main_strong = colors.main_strong
const main_weak = colors.main_weak
const accent_weak = colors.accent_weak
const accent_strong = colors.accent_strong
const text_color = colors.text_color
const text_color_weak = colors.text_color_weak
const main_color = colors.main
const accent_color = colors.accent



function LeftBar(props) {
  const navigator = useNavigation();
  return (
    <View style={[styles.container, props.style]}>
       <View style={styles.iconStack}>
       <Icon name="menu" style={styles.icon}></Icon>
        <TouchableOpacity  style={styles.button}
          onPress={() => navigator.openDrawer()}

        ></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    position: "absolute",
    color: text_color_weak,
    fontSize: 40,
    width: 40,
    height: 41
  },
  button: {
    width: 40,
    height: 41,
    position: "absolute"
  },
  iconStack: {
    width: 40,
    height: 41
  }
});

export default LeftBar;
