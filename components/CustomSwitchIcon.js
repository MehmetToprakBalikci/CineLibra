import { StyleSheet,View, Text,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import {useNavigation} from "@react-navigation/native";

const CustomSwitchIcon = () => {
  const navigation = useNavigation()
  const [isSwitch,setIsSwitch] = useState(true); // initially

  function toggleSwitch(){
    setIsSwitch(!isSwitch);

    if(isSwitch) {
      navigation.navigate('HomePage')
    }
    else {
      navigation.navigate('BookHomePage')
    }
  }

  if(isSwitch){
    return (
      <View style={styles.container}>
      <TouchableOpacity style={[styles.out,[{justifyContent:'flex-start',backgroundColor:'#FF8C00'}]
      ]} activeOpacity={1} onPress={toggleSwitch}>
        <View style={styles.inner}>
           <View style ={styles.icon}>
           <Image source = {require('../assets/book.png')} style={styles.icon} />
           </View>
        </View>
       </TouchableOpacity>

      </View>
    );
    }
    else{
      return (
        <View style={styles.container}>
        <TouchableOpacity style={[styles.out,[{justifyContent:'flex-end',backgroundColor:'#ED9121'}]
        ]} activeOpacity={1} onPress={toggleSwitch}>
          <View style={styles.inner}>
             <View style ={styles.icon}>
             <Image source = {require('../assets/movie.png')} style={styles.icon} />
             </View>
          </View>
         </TouchableOpacity>

        </View>
      );
      }
    }









      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'flex-end',
          paddingVertical:30,
          alignItems: 'center',
        },
        out: {
          width: 60,
          height: 30,
          backgroundColor: 'gray',
          borderRadius: 30,
          alignItems: 'center',
          flexDirection: 'row',
        },
        inner: {
          width: 28,
          height: 28,
          backgroundColor: 'white',
          borderRadius: 15,
          paddingHorizontal: 5,
          elevation: 8,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.3,
        },
        icon: {
          width: 29,
          height: 29,
          justifyContent: 'flex-end',
          alignSelf: 'center',
          shadowOpacity: 0.15,
          borderRadius: 15,
        },
      });
      export default CustomSwitchIcon;
