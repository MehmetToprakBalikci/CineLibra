// SwitchPanel.js
import React, { useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import CustomDrawer from '../../../components/BookPageComponents/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'

import {colors} from '../../../components/MoviePageComponents/colorProfile';
import BookSearchPage from '../../BookPages/BookSearchPage';




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


const SwitchBookSearchPanel = () => {
  console.log("switch search içinde")
  const [isSwitch,setOnSwitchDone] = useState(false);
  return (
<Drawer.Navigator   drawerContent={props=> <CustomDrawer {...props} isSwitch={isSwitch} setOnSwitchDone={setOnSwitchDone}  />}
     screenOptions={{
        headerShown: false,
      //  swipeEnabled: false,

      }}
    >
     <Drawer.Screen name="Current" component={BookSearchPage}  options={{
       drawerIcon: ({color})=> (
        <Ionicons name= "arrow-back" size={20} color={'#6A5ACD'}/>
       ),
          drawerLabelStyle: {
            color: text_color, // Set the color of the label


          },
    }} />

</Drawer.Navigator>
  );
};

export default SwitchBookSearchPanel;
