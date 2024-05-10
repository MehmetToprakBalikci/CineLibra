// SwitchPanel.js
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {colors} from '../../components/colorProfile';
import Profile from '../../screens/Profile';
import SignOutScreen from '../../screens/SignOutScreen';
import CustomDrawer from '../../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomePage from '../HomePage';
import SearchPage from '../SearchPage';
import StartPage from '../StartPage';
const Drawer = createDrawerNavigator();

const accent_color_strong = colors.accent_strong
const highlight_color = colors.highlight_color

const SwitchHomePanel = () => {
  return (
    <Drawer.Navigator   drawerContent={props=> <CustomDrawer {...props}  />}
     screenOptions={{
        headerShown: false,
        swipeEnabled: false,

      }}
    >

<Drawer.Screen name="Search" component={HomePage}  options={{
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
        drawerActiveTintColor:highlight_color
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
