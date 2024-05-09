import { View, Text,StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import {DrawerItemList } from '@react-navigation/drawer'
import CustomSwitchIcon from './CustomSwitchIcon'
import { SafeAreaView } from 'react-native-safe-area-context'
import {colors} from './colorProfile'

const text_color = colors.text_color
const text_color_weak= colors.text_color_weak
const bg_filter_color_strong = colors.bg_filter_color_strong
const opacity_color = colors.opacity_color
const opacity_color_strong = colors.opacity_color_strong

const CustomDrawer = (props) => {
  return (
    <ImageBackground source={require('../assets/bg_alt.jpg')} blurRadius={200} style={styles.backgroundImage}>
        <View style={styles.container}>

        <SafeAreaView style={styles.safeArea} {...props}>

        <View style={styles.headerContainer}>
          <Image source={require('../assets/image.png')} style={styles.imageStyle} />
          <Text style={[styles.nameText, { color: text_color }]}>Tolga Fehmioğlu</Text>
          <Text style={[styles.emailText, { color: text_color }]}>tolga_2001.fb@hotmail.com</Text>
        </View>

      </SafeAreaView>

      <View style={styles.menuItem}>
        <DrawerItemList
          {...props}
        />
      </View>

      <View style={styles.switchIcon}>
        <CustomSwitchIcon/>
      </View>
        </View>
    </ImageBackground>
  );
}

export default CustomDrawer

const styles = StyleSheet.create({
   container:
   {
       flex:1,
    backgroundColor: bg_filter_color_strong // Background color for the entire drawer
   },
   imageStyle:
   {
       width:100,
       height:100,
       borderRadius:40,
       marginTop:10,
       marginLeft:'2%'
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
      color: text_color_weak
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
    safeArea: {

    },
    backgroundImage:{
        flex: 1,
        justifyContent:'center',
    }




});
