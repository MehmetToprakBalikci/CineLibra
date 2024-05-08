import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignOutScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    // Implement your sign out logic here
    // For example, clearing user data, resetting authentication state, etc.
    // Then navigate to the start page or any other appropriate screen
    navigation.navigate('StartPage'); // Change 'StartPage' to the actual name of your start page
  };

  const handleCancel = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleLogOut = () => {
    handleSignOut(); // Call the sign-out logic
  };

  return (
    <View style={styles.container}>
    <View style={{alignItems:'horizontal',width:250}}>
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
    </View>
  );
};

export default SignOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Background color of the container
    borderRadius: 20, // Border radius to give it a curved shape
    padding: 20, // Padding inside the container
    marginHorizontal: 20, // Margin around the container
    elevation: 20, // Elevation for shadow effect (Android)
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 5, height: 3 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 100, // Shadow radius
  },
  text: {
    marginBottom: 20,
    fontSize: 18, // Font size of the text
    fontWeight: 'bold', // Font weight of the text
    textAlign: 'center', // Text alignment
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});