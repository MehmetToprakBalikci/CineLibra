// SwitchPanel.js
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Profile from '../../screens/Profile';
import SignOutScreen from '../../screens/SignOutScreen';
import CustomDrawer from '../../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomSwitchIcon from '../../components/CustomSwitchIcon';
import HomePage from '../HomePage';
import SearchPage from '../SearchPage';
import StartPage from '../StartPage';
import ItemDetailPage from '../ItemDetailPage';
import SwitchHomePanel from './SwitchInHomePage';
import MoviePage from '../MoviePage';

const Drawer = createDrawerNavigator();



const SwitchItemDetailPage = () => {
  return (
    <Drawer.Navigator   drawerContent={props=> <CustomDrawer {...props}  />} 
     screenOptions={{
        headerShown: false,
        swipeEnabled: false,
       
      }}
    >
     <Drawer.Screen name="Current" component={MoviePage}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "search-outline" size={20} color={'#6A5ACD'}/>
       ),
          drawerLabelStyle: {
            color: 'white', // Set the color of the label
           
            
          },
    }} />

    <Drawer.Screen name="Search" component={HomePage}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "search-outline" size={20} color={'#6A5ACD'}/>
       ),
          drawerLabelStyle: {
            color: 'white', // Set the color of the label
           
            
          },
    }} />


    <Drawer.Screen name="Profile" component={Profile}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "person-outline" size={20} color={'#6A5ACD'}/>
       ),
          drawerLabelStyle: {
            color: 'white', // Set the color of the label
           
            
          },
      }} />


     <Drawer.Screen name="SignOut" component={SignOutScreen}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name="log-out" size={20} color={'#6A5ACD'} />
       ),
        drawerLabelStyle: {
            color: 'white', // Set the color of the label
           
            
          },
    
      }}/>
    </Drawer.Navigator>
  );
};

export default SwitchItemDetailPage;