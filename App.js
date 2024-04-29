
import {Text, View,SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Navigator} from './Navigator'
export default function App() {
  return (

    <NavigationContainer>
    
      <Navigator />

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2C252B'

  }
});