import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../components/MoviePageComponents/colorProfile';
import Profile from '../../../screens/Profile';
import SignOutScreen from '../../../screens/SignOutScreen';
import CustomDrawer from '../../../components/MoviePageComponents/CustomDrawer';
import BookHomePage from '../../BookPages/BookHomePage';

const Drawer = createDrawerNavigator();

const accent_color_strong = colors.accent_strong;
const text_color = colors.text_color;
const main_color = colors.main;

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
      }}
    >
      <Drawer.Screen
        name="Search2_1"
        component={BookHomePage}
        options={{
          drawerLabel: 'Search',
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

      <Drawer.Screen
        name="Profile2_1"
        component={Profile}
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={20} color={'#6A5ACD'} />
          ),
          drawerLabelStyle: {
            color: text_color, // Set the color of the label
          },
        }}
      />

      <Drawer.Screen
        name="SignOut2_2"
        component={SignOutScreen}
        options={{
          drawerLabel: 'SignOut',
          drawerIcon: ({ color }) => (
            <Ionicons name="log-out" size={20} color={'#6A5ACD'} />
          ),
          drawerLabelStyle: {
            color: text_color, // Set the color of the label
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default SwitchBookHomePanel;
