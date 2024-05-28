import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import {colors} from '../components/MoviePageComponents/colorProfile'

const main_weak = colors.main_weak;
const text_color = colors.text_color;
const text_color_weak = colors.text_color_weak;
const accent_color = colors.accent;
const accent_color_weak = colors.accent_weak;
const accent_color_strong = colors.accent_strong;

const SignOutScreen = () => {
  const navigation = useNavigation();



  const handleCancel = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleLogOut = async () => {
    try {
      await auth.signOut();
      console.log(auth.currentUser ? auth.currentUser.email + " is logging out..." : "User is logged out");
      navigation.navigate("StartPage"); // Change 'StartPage' to the actual name of your start page
      console.log
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.second_container}>
        <Text style={styles.text}>Are you sure you want to sign out?</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default SignOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+20 : 0,
    backgroundColor: main_weak, // Background color of the container
  },
  text: {
    marginBottom: 20,
    fontSize: 18, // Font size of the text
    fontWeight: 'bold', // Font weight of the text
    textAlign: 'center', // Text alignment
    color: text_color,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems:'center',
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginVertical:10,
    minWidth:'75%',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: accent_color_strong,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical:10,
    borderRadius: 15,
    minWidth:'75%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  second_container: {
    alignItems:'center',
    marginBottom:50,
    justifyContent:'space-between',
    paddingTop:'80%',
    flex:1,
  }
});
