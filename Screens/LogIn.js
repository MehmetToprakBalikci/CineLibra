import { View, Text, SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import UserInput from '../Components/UserInput';
import { MyButton } from '../Components/Mybutton';

export default function LogIn() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style = {{flex:1 , backgroundColor:'#6C294F'}}>
      
      <View style={{justifyContent:'flex-start'}} >
        <TouchableOpacity style={{backgroundColor:'#AE77A4', width:'10%',
        marginLeft:10,borderRadius:10}}
        onPress={()=> navigation.goBack()}> 
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'
    }}>
        <Text style={{fontSize:"80%"}}> LogIn</Text>

      </View>

      <View style={{flex:1}}>
        <UserInput text={'Email Address'}/>
        <UserInput text={'Password'}/>
        <TouchableOpacity style={{alignItems:'center', marginTop:12}}>
         <MyButton message={'LogIn'}/>
        </TouchableOpacity>
        
      </View>
      
      
    


    </SafeAreaView>
  )
}