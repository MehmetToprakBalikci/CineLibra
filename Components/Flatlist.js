
import { Button, Image, StyleSheet, Text, View ,StatusBar, TextInput, ImageBackground, TouchableOpacity, SafeAreaView, FlatList, FlatListComponent} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { MyButton } from './.expo/screens/components/MyButton';
import { Images } from './Images';


export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>

      <Text>Muhammed Enes Gokdeniz</Text>
      <FlatList data={Images}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(
         <Image style={{width:100,height:100,
        borderRadius:50, marginRight:5}}
        source={{uri : item.image}}/>       
    )} 
    /> 

    <Text style={{width:'80%'}}>Tufan Atli</Text>
      
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,//flex 1 tum ekrani kaplayacak  
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'

  }
});
