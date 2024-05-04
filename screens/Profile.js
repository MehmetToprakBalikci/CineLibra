import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';


const Profile = () => {
  const navigator = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default Profile;
