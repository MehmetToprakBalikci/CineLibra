

import { View, Text, TouchableOpacityComponent, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

import { MyButton } from '../Components/Mybutton'
import { useNavigation, useNavigationState } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex:1 , 
    backgroundColor:'#6C294F', 
    alignItems:'center' , 
    justifyContent:'center'}}>
      <View style={{flex:3 , alignItems:'center' , justifyContent:'center'}}>
      <Text style={{
         
         textAlign:'center' ,
         fontSize:"70%"
        }}>Let's Get Started</Text>
      </View>

      <View style={{flex:1}}>
        <TouchableOpacity  style ={{flex:2,alignItems:'center',
        justifyContent:'center'} } 
        onPress={()=> navigation.navigate('SignUp')}> 
          <MyButton message={'SignUp'} />
        </TouchableOpacity>
        <View style={{flex:1 , flexDirection:'row'}}>
          <Text style={{fontSize:'18%'}}>Already have an account?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('LogIn')}>
            <Text style={{fontWeight:'bold',fontSize:'18%' , marginLeft:5}}>Log In!</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  )
}