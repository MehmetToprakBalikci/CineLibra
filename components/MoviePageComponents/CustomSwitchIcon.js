import { StyleSheet,View, Text,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import {useNavigation} from "@react-navigation/native";

export const CustomSwitchIcon = ({isSwitch,setOnSwitchDone}) => {
 //  const [isSwitch,setIsSwitch] = useState(true); // initially
//  if (typeof setOnSwitchDone !== 'function') {
//   console.error('setOnSwitchDone is not a function!');
//   alert('setOnSwitchDone is not a function!')
//   return null; // or handle the error appropriately
// }
// else{
//   alert('setOnSwitchDone is  a function!')
// }


  function toggleSwitch(){
    setOnSwitchDone(!isSwitch);
    console.log("after toogle switch is "+isSwitch);
  }

  if(isSwitch){
    return (
      <View style={styles.container}>
      <TouchableOpacity style={[styles.out,[{justifyContent:'flex-start',backgroundColor:'#FF8C00'}]
      ]} activeOpacity={1} onPress={toggleSwitch}>
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
        <TouchableOpacity style={[styles.out,[{justifyContent:'flex-end',backgroundColor:'#ED9121'}]
        ]} activeOpacity={1} onPress={toggleSwitch}>
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

