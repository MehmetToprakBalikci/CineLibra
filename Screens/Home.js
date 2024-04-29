

import { View, Text, TouchableOpacityComponent, TouchableOpacity } from 'react-native'
import React from 'react'

import { MyButton } from '../MenesWorks/Mybutton'
import { useNavigation, useNavigationState } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation()
  return (
    <View style={{flex:1 , backgroundColor:'gray', alignItems:'center' , justifyContent:'center'}}>
      <Text style={{marginBottom:10}}>HomePage</Text>

      <TouchableOpacity onPress={()=> navigation.navigate('LogIn')}> 
        <MyButton message={'LogIn'} />
      </TouchableOpacity>
      
    </View>
  )
}