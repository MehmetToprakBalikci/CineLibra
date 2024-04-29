import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function UserInput({text}) {
  return (
    <View style={{marginBottom:10,paddingLeft:'10%' , justifyContent:'center', backgroundColor:'#6C294F',alignSelf:'flex-start' , width:'100%'}}>
       <Text style={{fontSize:22 ,fontWeight:"bold" ,alignSelf:'flex-start', marginBottom:5}}>{text}</Text>
        <TextInput style={{backgroundColor:'gray',
          height:30,
          width:"85%",
          borderRadius:20,padding:10 ,paddingRight:10}}/>

    </View>
  )
}