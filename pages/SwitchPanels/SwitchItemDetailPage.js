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

const Drawer = createDrawerNavigator();



const SwitchItemDetailPage = () => {
  return (
    <Drawer.Navigator   drawerContent={props=> <CustomDrawer {...props}  />} screenOptions={{headerShown:false}} >

<Drawer.Screen name="Current" component={ItemDetailPage}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name="arrow-back" size={20} color={color}/>
       )
      }} />
      <Drawer.Screen name="Search" component={SwitchHomePanel}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "search-outline" size={20} color={color}/>
       )
      }} />
    
    <Drawer.Screen name="Profile" component={Profile}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "person-outline" size={20} color={color}/>
       )
      }} />
   
      
      <Drawer.Screen name="SignOut" component={SignOutScreen}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name="log-out" size={20} color={color} />
       )
      }}/>
    </Drawer.Navigator>
  );
};

export default SwitchItemDetailPage;