// SwitchPanel.js
import React, { useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {colors} from '../../components/MoviePageComponents/colorProfile';
import Profile from '../../screens/Profile';
import SignOutScreen from '../../screens/SignOutScreen';
import CustomDrawer from '../../components/MoviePageComponents/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomePage from '../MoviePages/HomePage';
import BookHomePage from '../BookPages/BookHomePage';
import { useNavigation } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

const accent_color_strong = colors.accent_strong
const text_color_weak = colors.text_color_weak
const text_color = colors.text_color
const highlight_color = colors.highlight_color
const accent_color = colors.accent
const accent_color_weak = colors.accent_weak
const opacity_color =colors.opacity_color
const main_color = colors.main
const main_color_weak = colors.main_weak
const main_color_strong = colors.main_strong


const SwitchHomePanel = () => {
  const navigator = useNavigation();
  const x = 0;
  const y = 2;
  const [isSwitch,setOnSwitchDone] = useState(true);
  console.log("switchhome içindeyim")
  return (
    <Drawer.Navigator   drawerContent={props=> <CustomDrawer {...props} isSwitch={isSwitch} setOnSwitchDone={setOnSwitchDone}  />}
     screenOptions={{
        headerShown: false,
      //  swipeEnabled: false,

      }}
    >

<Drawer.Screen name="Search" component={isSwitch?HomePage:BookHomePage} options={{

       drawerIcon: ({color})=> (
             <Ionicons name= "search-outline" size={20} color={accent_color_strong}/>


       ),
          drawerLabelStyle: {
            color: text_color, // Set the color of the label


          },
            drawerActiveBackgroundColor:main_color,
            drawerInactiveBackgroundColor:main_color
    }} />


    <Drawer.Screen name="Profile" component={Profile}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "person-outline" size={20} color={accent_color_strong}/>
       ),
          drawerLabelStyle: {
            color: text_color, // Set the color of the label


          },
      }} />


     <Drawer.Screen name="SignOut" component={SignOutScreen} options={{
       drawerIcon: ({color})=> (
        <Ionicons name="log-out" size={20} color={accent_color_strong}/>
       ),
        drawerLabelStyle: {
            color: text_color, // Set the color of the label


          },
      }}/>
    </Drawer.Navigator>
  );
};

export default SwitchHomePanel;
