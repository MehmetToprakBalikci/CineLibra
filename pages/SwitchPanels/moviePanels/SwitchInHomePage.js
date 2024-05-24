import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '../../../components/MoviePageComponents/colorProfile';
import Profile from '../../../screens/Profile';
import SignOutScreen from '../../../screens/SignOutScreen';
import CustomDrawer from '../../../components/MoviePageComponents/CustomDrawer';
import HomePage from '../../MoviePages/HomePage';
// import SwitchBookHomePanel from '../bookPanels/SwitchBookHomePanel';  // Ensure the correct import path

const Drawer = createDrawerNavigator();

const accent_color_strong = colors.accent_strong;
const text_color = colors.text_color;
const main_color = colors.main;

const SwitchHomePanel = () => {
  const navigation = useNavigation();
  const [isSwitch, setOnSwitchDone] = useState(true);

  useEffect(() => {
    if (!isSwitch) {
      navigation.navigate('bookHome');  // Ensure 'BookHome' is correctly registered in your navigator
    }
  }, [isSwitch, navigation]);

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawer {...props} isSwitch={isSwitch} setOnSwitchDone={setOnSwitchDone} />
      )}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Search"
        component={HomePage}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="search-outline" size={20} color={accent_color_strong} />,
          drawerLabelStyle: {
            color: text_color,
          },
          drawerActiveBackgroundColor: main_color,
          drawerInactiveBackgroundColor: main_color,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="person-outline" size={20} color={accent_color_strong} />,
          drawerLabelStyle: {
            color: text_color,
          },
        }}
      />
      <Drawer.Screen
        name="SignOut"
        component={SignOutScreen}
        options={{
          drawerIcon: ({ color }) => <Ionicons name="log-out" size={20} color={accent_color_strong} />,
          drawerLabelStyle: {
            color: text_color,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default SwitchHomePanel;
