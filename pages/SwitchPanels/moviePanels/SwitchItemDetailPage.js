// SwitchPanel.js
import React, { useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Profile from '../../../screens/Profile';
import SignOutScreen from '../../../screens/SignOutScreen';
import CustomDrawer from '../../../components/MoviePageComponents/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomSwitchIcon from '../../../components/MoviePageComponents/CustomSwitchIcon';
import {colors} from '../../../components/MoviePageComponents/colorProfile';
import HomePage from '../../MoviePages/HomePage';
import SearchPage from '../../MoviePages/SearchPage';
import StartPage from '../../MoviePages/StartPage';
import ItemDetailPage from '../../MoviePages/ItemDetailPage';
import MoviePage from '../../MoviePages/MoviePage';
import bookHomePage from '../../BookPages/BookHomePage';
import {HomePageScreen} from '../../../screens/HomePageScreen';
import SwitchBookHomePanel from '../bookPanels/SwitchBookHomePanel';
import { CustomMovieSearchScreen } from '../../../screens/CustomMovieSearchScreen';
import SwitchHomePanel from './SwitchInHomePage';

const Drawer = createDrawerNavigator();

const accent_color_strong = colors.accent_strong
const highlight_color = colors.highlight_color

const SwitchItemDetailPage = () => {
  console.log("switch item movie içinde");
  const [isSwitch,setOnSwitchDone] = useState(true);
  return (
    <Drawer.Navigator   drawerContent={props=> <CustomDrawer {...props} isSwitch={isSwitch} setOnSwitchDone={setOnSwitchDone}  />}
     screenOptions={{
        headerShown: false,
      //  swipeEnabled: false,

      }}
    >
     <Drawer.Screen name="Current1" component={MoviePage}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "arrow-back" size={20} color={accent_color_strong}/>
       ),
          drawerLabelStyle: {
            color: 'white', // Set the color of the label


          },
    }} />

    <Drawer.Screen name="Search1" component={CustomMovieSearchScreen} options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "search-outline" size={20} color={accent_color_strong}/>
       ),
          drawerLabelStyle: {
            color: 'white', // Set the color of the label


          },
    }} />


    <Drawer.Screen name="Profile1" component={Profile}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "person-outline" size={20} color={accent_color_strong}/>
       ),
          drawerLabelStyle: {
            color: 'white', // Set the color of the label


          },
      }} />


     <Drawer.Screen name="SignOut1" component={SignOutScreen}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name="log-out" size={20} color={accent_color_strong} />
       ),
        drawerLabelStyle: {
            color: 'white', // Set the color of the label


          },

      }}/>
    </Drawer.Navigator>
  );
};

export default SwitchItemDetailPage;
