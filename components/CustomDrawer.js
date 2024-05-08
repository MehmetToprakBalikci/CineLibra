import { View, Text,StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import {DrawerItemList } from '@react-navigation/drawer'
import CustomSwitchIcon from './CustomSwitchIcon'
import { SafeAreaView } from 'react-native-safe-area-context'


const CustomDrawer = (props) => {
  return (
    <ImageBackground source={require('../assets/bg_alt.jpg')} blurRadius={55} style={styles.backgroundImage}>
      <SafeAreaView style={styles.safeArea} {...props}>
        <View style={styles.headerContainer}>
          <Image source={require('../assets/image.png')} style={styles.imageStyle} />
          <Text style={[styles.nameText, { color: '#fff' }]}>Tolga Fehmioğlu</Text>
          <Text style={[styles.emailText, { color: '#fff' }]}>tolga_2001.fb@hotmail.com</Text>
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
    </ImageBackground>
  );
}

export default CustomDrawer

const styles = StyleSheet.create({
   container:
   {
    flex:1,
    backgroundColor: '#8200d6', // Background color for the entire drawer
   },
   imageStyle:
   {
   width:80,
   height:80,
   borderRadius:40,
   marginTop:10,
   marginLeft:'1%'


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
    padding:'10%',
    paddingRight:'10%',
    paddingVertical:'140%',
    marginTop:'20%'

    },
    menuItemLabel:{
      color: '#fff'
    },
    
    nameText:{
      color:"#fff",
      marginLeft:'1%',
      fontSize:14,
      marginBottom:5

    },
    emailText:{
      color:"#fff",
      marginLeft:'1%',
      fontSize:10
    },
    backgroundImage:{
      backgroundImage: {
        height:'110%',
        width:'100%',
        flex: 5,
        justifyContent:'center'
    }

    }




});