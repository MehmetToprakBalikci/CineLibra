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
const highlight_color = colors.highlight_color

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
            color: 'white', // Set the color of the label


          },
            drawerActiveTintColor:highlight_color
    }} />


    <Drawer.Screen name="Profile" component={Profile}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "person-outline" size={20} color={accent_color_strong}/>
       ),
          drawerLabelStyle: {
            color: 'white', // Set the color of the label


          },
        drawerActiveTintColor:highlight_color,
      }} />


     <Drawer.Screen name="SignOut" component={SignOutScreen}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name="log-out" size={20} color={accent_color_strong} />
       ),
        drawerLabelStyle: {
            color: 'white', // Set the color of the label


          },
         drawerActiveTintColor:highlight_color
      }}/>
    </Drawer.Navigator>
  );
};

export default SwitchHomePanel;
