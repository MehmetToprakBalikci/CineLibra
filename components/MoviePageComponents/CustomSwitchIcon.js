import { StyleSheet,View, Text,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import {useNavigation} from "@react-navigation/native";
import {colors, BookColors} from './colorProfile'

export const CustomSwitchIcon = ({isSwitch,setOnSwitchDone}) => {
  const navigator = useNavigation();
 //  const [isSwitch,setIsSwitch] = useState(true); // initially
//  if (typeof setOnSwitchDone !== 'function') {
//   console.error('setOnSwitchDone is not a function!');
//   alert('setOnSwitchDone is not a function!')
//   return null; // or handle the error appropriately
// }
// else{
//   alert('setOnSwitchDone is  a function!')
// }


  const accent_color = colors.accent
  const accent_strong = colors.accent_strong
  const accent_weak = colors.accent_weak

  function toggleSwitch1(){
    setOnSwitchDone(!isSwitch);

  }
  function toggleSwitch(){
    setOnSwitchDone(!isSwitch);
    console.log("after toogle switch is "+isSwitch);
  }

  if(isSwitch){
    return (
      <View style={styles.container}>
      <TouchableOpacity style={[styles.out,[{justifyContent:'flex-start',backgroundColor:accent_weak}]
      ]} activeOpacity={1} onPress={()=>{toggleSwitch(); navigator.replace("bookHome");}}>
        <View style={styles.inner}>
           <View style ={styles.icon}>
           <TouchableOpacity></TouchableOpacity>
           <Image source = {require('../../assets/movie.png')} style={styles.icon} />
           </View>
        </View>
       </TouchableOpacity>

      </View>
    );
    }
    else{
      return (
        <View style={styles.container}>
        <TouchableOpacity style={[styles.out,[{justifyContent:'flex-end',backgroundColor: colors.accent_weak}]
        ]} activeOpacity={1} onPress={()=>{toggleSwitch(); navigator.replace("HomePage");}}>
          <View style={styles.inner}>
             <View style ={styles.icon}>
             <Image source = {require('../../assets/book.png')} style={styles.icon} />
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
