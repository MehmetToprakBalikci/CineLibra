import { View, Text,StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import CustomSwitchIcon from './CustomSwitchIcon'


const CustomDrawer = (props) => {
  return (
    <View style={styles.container} >
     <ImageBackground source={require('../assets/bg.jpg')}></ImageBackground>

    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#8200d6'}}>
      <ImageBackground source = {require('../assets/menu-bg.jpeg')} style={{padding:20}}>
            <Image source={require('../assets/image.png')} style={styles.imageStyle} />
            <Text style={{color:"#fff",marginLeft:'-4%',fontSize:14,marginBottom:5}}>Tolga Fehmioğlu</Text>
            <Text style={{color:"#fff",marginLeft:'-4%',fontSize:10}}>tolga_2001.fb@hotmail.com</Text>
     </ImageBackground>
          <View style={styles.menuItem}>
          <DrawerItemList {...props} />
          </View>

    </DrawerContentScrollView>
    <View style={styles.switchIcon}>
    <CustomSwitchIcon/>
    </View>
  </View>



  )
}

export default CustomDrawer

const styles = StyleSheet.create({
   container:
   {
    flex:1
   },
   imageStyle:
   {
   width:80,
   height:80,
   borderRadius:40,
   marginBottom:10
   },
   menuItem:{
    backgroundColor:'#fff'
   },
   signOut:{
   margin:5,
   backgroundColor:'red',
   padding:20,
   paddingRight:20
   },
   switchIcon:{
    padding:'10%',
    paddingRight:'10%',
    paddingVertical:40,
    marginTop:'20%'

    },




});
