import { View, Text,StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import {DrawerItemList,DrawerItem } from '@react-navigation/drawer'
import { CustomSwitchIcon } from '../MoviePageComponents/CustomSwitchIcon'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../MoviePageComponents/colorProfile'
import { useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../firebase'
const text_color = colors.text_color
const accent_color_strong = colors.accent_strong
const main_weak = colors.main_weak
const main_color = colors.main
const text_color_weak= colors.text_color_weak
const bg_filter_color_strong = colors.bg_filter_color_strong
const opacity_color = colors.opacity_color
const opacity_color_strong = colors.opacity_color_strong



const CustomDrawer = ({ isSwitch, setOnSwitchDone, ...props }) => {
  const navigation = useNavigation();
  const user = auth.currentUser;

  // if (typeof setOnSwitchDone !== 'function') {
  //   console.error('setOnSwitchDone is not a function!');
  //   alert('setOnSwitchDone is not a function!')
  //   return null; // or handle the error appropriately
  // }
  // else{
  //   alert('setOnSwitchDone is  a function!')
  // }



  return (
        <View style={styles.container}>

        <SafeAreaView style={styles.safeArea} {...props}>

        <View style={styles.headerContainer}>
          <Image source={require('../../assets/image.png')} style={styles.imageStyle} />
          <Text style={[styles.nameText, { color: text_color }]}>{user.displayName}</Text>
          <Text style={[styles.emailText, { color: text_color }]}>{user.email}</Text>
        </View>

      </SafeAreaView>

      <View style={styles.menuItem}>
      
        
      
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Home"
        onPress={() => {
          // Navigate to CustomMovieSearchScreen when this item is pressed
          navigation.navigate('bookHome');
        }}
        icon={({ color }) => (
          <Ionicons name="search-outline" size={20} color={'#6A5ACD'} />
        )}
        labelStyle={{ color: text_color }}
        activeBackgroundColor={main_color}
        inactiveBackgroundColor={main_color}
      />
 
 <DrawerItem
        label="Profile"
        onPress={() => {
          // Navigate to CustomMovieSearchScreen when this item is pressed
          navigation.navigate('Profile');
        }}
        icon={({ color }) => (
          <Ionicons name="person-outline" size={20} color={'#6A5ACD'} />
        )}
        labelStyle={{ color: text_color }}
        activeBackgroundColor={main_color}
        inactiveBackgroundColor={main_color}
      />
      <DrawerItem
        label="SignOut"
        onPress={() => {
          // Navigate to CustomMovieSearchScreen when this item is pressed
          navigation.navigate('SignOut');
        }}
        icon={({ color }) => (
          <Ionicons name="log-out" size={20} color={'#6A5ACD'} />
        )}
        labelStyle={{ color: text_color }}
        activeBackgroundColor={main_color}
        inactiveBackgroundColor={main_color}
      />
          
      </View>

      <View style={styles.switchIcon}>
        { <CustomSwitchIcon
        isSwitch={isSwitch}
        setOnSwitchDone={setOnSwitchDone}
        /> }
      </View>
        </View>
  );
}

export default CustomDrawer

const styles = StyleSheet.create({
   container:
   {
       flex:1,
    backgroundColor: main_weak// Background color for the entire drawer
   },
   imageStyle:
   {
       width:120,
       height:120,
       borderRadius:40,
       marginTop:10,
       marginLeft:'2%',
       shadowRadius:2,
       shadowColor:'black',
       shadowOpacity:1,
       shadowOffset:{height:2},
   },
   menuItem:{
    fontStyle:'italic'
   },
   signOut:{
   margin:5,
   padding:20,
   paddingRight:20
   },
   switchIcon:{
       alignSelf:'center',
        flex:1,
    },
    menuItemLabel:{
      color: text_color
    },

    nameText:{
      marginLeft:'1%',
      fontSize:14,
      marginBottom:5

    },
    emailText:{
      marginLeft:'1%',
      fontSize:10
    },
    headerContainer: {
        alignItems:'center',
    },
    backgroundImage:{
        flex: 1,
        justifyContent:'center',
    }




});
