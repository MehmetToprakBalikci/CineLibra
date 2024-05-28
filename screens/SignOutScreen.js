import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { auth } from '../firebase';
const SignOutScreen = () => {
  const navigator = useNavigation();

  const handleCancel = ()=>{
    // navigate to prev
    navigator.goBack();

  }
  const handleLogOut = async ()=>{
    try {
      await auth.signOut();
      console.log(auth.currentUser ? auth.currentUser.email + " is logging out..." : "User is logged out");
      navigator.navigate("StartPage"); // Change 'StartPage' to the actual name of your start page
      console.log
    } catch (error) {
      console.error("Error signing out: ", error);
    }

  }

  

 

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={true}
        onBackdropPress={handleCancel}
        style={styles.modal}
        swipeDirection="down"
        onSwipeComplete={handleCancel}
      >
        <View style={styles.secondContainer}>
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
      </Modal>
    </SafeAreaView>
  );
};
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  secondContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    height: height / 2, // Half of the screen height
    
  },
  text: {
    fontSize: 18, 
                            
                                
                              
    marginTop: '10%',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '50%',
    height: '30%',
    marginTop: '20%',
  },
  cancelButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
    flex: 1,
   alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    marginTop:20 
    
  },
  buttonText: {
    color: 'white',
  },
});

export default SignOutScreen;
