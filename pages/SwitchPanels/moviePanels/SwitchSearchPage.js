// SwitchPanel.js
import React, { useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Profile from '../../../screens/Profile';
import SignOutScreen from '../../../screens/SignOutScreen';
import CustomDrawer from '../../../components/MoviePageComponents/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomSwitchIcon from '../../../components/MoviePageComponents/CustomSwitchIcon';
import HomePage from '../../MoviePages/HomePage';
import SearchPage from '../../MoviePages/SearchPage';
import AltStartPage from '../../MoviePages/AltSignupPage';
import ItemDetailPage from '../../MoviePages/ItemDetailPage';
import StartPage from '../../MoviePages/StartPage';
// import bookHomePage from '../../BookPages/BookHomePage';
import {colors} from '../../../components/MoviePageComponents/colorProfile';
// import SwitchBookHomePanel from '../bookPanels/SwitchBookHomePanel';


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


const SwitchSearchPage = () => {
  console.log("switch search movie içinde")
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
        <Ionicons name= "arrow-back" size={20} color={accent_color_strong}/>
       ),
          drawerLabelStyle: {
            color: text_color, // Set the color of the label


          },
    }} />

</Drawer.Navigator>
  );
};

export default SwitchSearchPage;
