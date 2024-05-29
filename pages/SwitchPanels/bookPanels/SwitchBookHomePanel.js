import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BookColors } from '../../../components/MoviePageComponents/colorProfile';
import Profile from '../../../screens/Profile';
import SignOutScreen from '../../../screens/SignOutScreen';
import CustomDrawer from '../../../components/BookPageComponents/CustomDrawer';
import BookHomePage from '../../BookPages/BookHomePage';

const Drawer = createDrawerNavigator();

const accent_color_strong = BookColors.accent_strong;
const text_color = BookColors.text_color;
const main_color = BookColors.main;

const SwitchBookHomePanel = () => {
  const navigator = useNavigation();
  const [isSwitch, setOnSwitchDone] = useState(false);

  useEffect(() => {
    if (isSwitch) {
      navigator.navigate('HomePage');  // Ensure 'BookHome' is correctly registered in your navigator
    }
  }, [isSwitch, navigator]);

  console.log("switch on book home is " + isSwitch);

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} isSwitch={isSwitch} setOnSwitchDone={setOnSwitchDone} />}
      screenOptions={{
        headerShown: false,
        swipeEnabled:false
      }}
    >
      <Drawer.Screen
        name="Search"
        component={BookHomePage}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="search-outline" size={20} color={'#6A5ACD'} />
          ),
          drawerLabelStyle: {
            color: text_color, // Set the color of the label
          },
          drawerActiveBackgroundColor: main_color,
          drawerInactiveBackgroundColor: main_color,
        }}
      />

   </Drawer.Navigator>
  );
};

export default SwitchBookHomePanel;
