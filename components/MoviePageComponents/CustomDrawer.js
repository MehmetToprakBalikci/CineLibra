import { View, Text,StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import {DrawerItemList,DrawerItem } from '@react-navigation/drawer'
import {CustomSwitchIcon} from './CustomSwitchIcon'
import { SafeAreaView } from 'react-native-safe-area-context'
import {colors} from './colorProfile'
import { useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
const text_color = colors.text_color
const main_weak = colors.main_weak
const text_color_weak= colors.text_color_weak
const bg_filter_color_strong = colors.bg_filter_color_strong
const opacity_color = colors.opacity_color
const opacity_color_strong = colors.opacity_color_strong


const CustomDrawer = ({ isSwitch, setOnSwitchDone, ...props }) => {
  const navigation = useNavigation();
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
          <Text style={[styles.nameText, { color: text_color }]}>Tolga Fehmioğlu</Text>
          <Text style={[styles.emailText, { color: text_color }]}>tolga_2001.fb@hotmail.com</Text>
        </View>

      </SafeAreaView>

      <View style={styles.menuItem}>
      
         <DrawerItemList
          {...props}
        />
          {/* <DrawerItem
        label="Custom Item"
        onPress={() => {
          // Handle custom item press here
         // console.log("Custom drawer item pressed");
          navigation.navigate("HomePage")
        }}
        icon={({ color, size }) => (
          <Ionicons name="ios-information-circle" size={size} color={color} />
        )}
      />  */}
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
