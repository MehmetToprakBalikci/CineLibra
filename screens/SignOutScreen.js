import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import {colors} from '../components/MoviePageComponents/colorProfile'

const main_weak = colors.main_weak;
const text_color = colors.text_color;
const text_color_weak = colors.text_color_weak;
const accent_color = colors.accent;
const accent_color_weak = colors.accent_weak;
const accent_color_strong = colors.accent_strong;
const main_color = colors.main;
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
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
      <View style={{backgroundColor:Platform.OS === 'ios' ? 'transparent' : 'rgba(0,0,0,0.5)' , flex:1}}>
        <View style={{backgroundColor: 'transparent' , flex:4}}>

        </View>
        <View style={styles.buttonContainer}>

          <Text style={{color:text_color ,alignSelf:'center', fontWeight:'bold', fontSize:18, paddingTop:'10%'}}>Are you sure you want to sign out?</Text>

          <View style={styles.innerStyle}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.buttonText1}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
            <Text style={styles.buttonText2}>Sign Out</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

export default SignOutScreen;

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
    fontSize: 18, // Font size of the text
    fontWeight: 'bold', // Font weight of the text
    textAlign: 'center', // Text alignment
    color: text_color,
  },
  buttonContainer: {
    flex:2,
    backgroundColor:main_weak,
    paddingHorizontal:'5%',
    borderRadius:15,
    shadowColor:'black',
    shadowRadius:20,
    shadowOffset:{height:5},
    shadowOpacity:1,
  },
  cancelButton: {
    backgroundColor: main_color,
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical:10,
    minWidth:'75%',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: accent_color_strong,
    paddingVertical: 15,
    marginVertical:10,
    borderRadius: 15,
    minWidth:'75%',
    alignItems: 'center',
  },
  buttonText1: {
    fontSize: 15,
    fontWeight: 'bold',
    color:text_color,
  },
  buttonText2: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'white',
  },
  innerStyle: {
    flex:1,
    justifyContent:'flex-end',
    paddingBottom:'15%',
  }
});
