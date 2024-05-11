// SwitchPanel.js
import React, { useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Profile from '../../screens/Profile';
import SignOutScreen from '../../screens/SignOutScreen';
import CustomDrawer from '../../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomSwitchIcon from '../../components/CustomSwitchIcon';
import HomePage from '../HomePage';
import SearchPage from '../SearchPage';
import AltStartPage from '../AltSignupPage';
import ItemDetailPage from '../ItemDetailPage';
import StartPage from '../StartPage';
import bookHome from '../bookHome';
import { HomePageScreen } from '../../screens/HomePageScreen';

const Drawer = createDrawerNavigator();


const SwitchSearchPage = () => {
  console.log("switch search içinde")
  const [isSwitch,setOnSwitchDone] = useState(true);
  return (
<Drawer.Navigator   drawerContent={props=> <CustomDrawer {...props} isSwitch={isSwitch} setOnSwitchDone={setOnSwitchDone}  />}
     screenOptions={{
        headerShown: false,
      //  swipeEnabled: false,
       
      }}
    >
     <Drawer.Screen name="Current" component={SearchPage}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "arrow-back" size={20} color={'#6A5ACD'}/>
       ),
          drawerLabelStyle: {
            color: 'white', // Set the color of the label
           
            
          },
    }} />

    <Drawer.Screen name="Search" component={isSwitch?HomePage:bookHome}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "search-outline" size={20} color={'#6A5ACD'}/>
       ),
          drawerLabelStyle: {
            color: 'white', // Set the color of the label
           
            
          },
          //onPress:console.log("dfdsf");
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

export default SwitchSearchPage;