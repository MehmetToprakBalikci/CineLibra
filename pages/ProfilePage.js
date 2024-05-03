

import { View, Text, SafeAreaView, TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import MovieList from '../components/movieList';

export default function ProfilePage() {


    const navigation = useNavigation()

  return (
    <SafeAreaView style={{flex:1 , backgroundColor:'gray'}}>
        <TouchableOpacity  onPress={()=> navigation.goBack()}>
            <AntDesign name="arrowleft" size={'35%'} color="black" style={sytles.arrowLeft} />
        </TouchableOpacity>

        <View style={{flex:1 , alignItems:'center',justifyContent:'center',flexDirection:'row' , marginBottom:"7%"}}>
            <Image source={require('/Users/menes/Desktop/CineLibra/assets/ProfilPhoto.jpeg')} style={sytles.image}/>
            <Text style={{fontSize:'20%'}}>Muhammed Enes</Text>
        </View>

        <View style={{flex:4}}>
            <MovieList Text={'Watch Later'}/>
            <MovieList Text={'Favorites Movies'}/>
            <MovieList Text={'Watched Movies'}/>
        </View>
        
      
    </SafeAreaView>
  )
}

const sytles = StyleSheet.create({

    arrowLeft : {
        marginLeft:15
    }, 
    image :{
        width:'30%',
        height:"80%" ,
        borderRadius:200,
        marginRight:20
    }

    



})