// SignOutScreen.js
import React from 'react';
import { View, Butto,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const SignOutScreen = () => {
  const navigation = useNavigation();

  
    // Implement sign out logic here
    console.log('Signing out...');

    // Navigate to the sign-in screen after signing out
   navigation.navigate("StartPage")
 }

export default SignOutScreen;

