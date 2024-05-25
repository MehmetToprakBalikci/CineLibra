import React, { useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {colors} from '../../../components/MoviePageComponents/colorProfile';
import Profile from '../../../screens/Profile';
import SignOutScreen from '../../../screens/SignOutScreen';
import CustomDrawer from '../../../components/MoviePageComponents/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomePage from '../../MoviePages/HomePage';
import BookHomePage from '../../BookPages/BookHomePage';
import { useNavigation } from '@react-navigation/native';
import SwitchHomePanel from '../moviePanels/SwitchInHomePage';
import BookPage from '../../BookPages/BookPage';
import SwitchBookHomePanel from './SwitchBookHomePanel';
import BookSearchDrawer from '../../../screens/bookSearchDrawer';

const Drawer = createDrawerNavigator();

const accent_color_strong = colors.accent_strong
const highlight_color = colors.highlight_color

const SwitchBookItemDetailPage = () => {
  console.log("switch item içinde");
  const [isSwitch,setOnSwitchDone] = useState(false);
  return (
    <Drawer.Navigator   drawerContent={props=> <CustomDrawer {...props} isSwitch={isSwitch} setOnSwitchDone={setOnSwitchDone}  />}
     screenOptions={{
        headerShown: false,
      //  swipeEnabled: false,

      }}
      
    >
      <Drawer.Screen name="Current3_1" component={BookPage}  options={{
       drawerLabel:'Profile',
       drawerIcon: ({color})=> (
        <Ionicons name= "person-outline" size={20} color={'#6A5ACD'}/>
       ),
          drawerLabelStyle: {
            color: text_color, // Set the color of the label


          },
      }} />
    
    
     <Drawer.Screen name="Search3_2" component={BookSearchDrawer} options={{
       drawerLabel:'Search',
       drawerIcon: ({color})=> (
             <Ionicons name= "search-outline" size={20} color={'#6A5ACD'}/>


       ),
          drawerLabelStyle: {
            color: text_color, // Set the color of the label


          },
            drawerActiveBackgroundColor:main_color,
            drawerInactiveBackgroundColor:main_color
    }} />


    <Drawer.Screen name="Profile3_3" component={Profile}  options={{
       drawerLabel:'Profile',
       drawerIcon: ({color})=> (
        <Ionicons name= "person-outline" size={20} color={'#6A5ACD'}/>
       ),
          drawerLabelStyle: {
            color: text_color, // Set the color of the label


          },
      }} />


     <Drawer.Screen name="SignOut3_4" component={SignOutScreen} options={{
      drawerLabel:'SignOut',
       drawerIcon: ({color})=> (
        <Ionicons name="log-out" size={20} color={'#6A5ACD'}/>
       ),
        drawerLabelStyle: {
            color: text_color, // Set the color of the label


          },
      }}/>
    </Drawer.Navigator>
  );
};

export default SwitchBookItemDetailPage;
