import {View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, Platform, StatusBar} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import Lists from "../components/MoviePageComponents/Lists";
import ProfileLists from "../components/MoviePageComponents/ProfileLists";
import {colors} from '../components/MoviePageComponents/colorProfile';

const text_color = colors.text_color
const text_color_weak = colors.text_color_weak
const bg_filter_color = colors.bg_filter_color
const bg_filter_color_strong = colors.bg_filter_color_strong

export default function Profile() {

    const navigation = useNavigation()

    return (
        <ImageBackground style={{flex:1}} blurRadius={200} source={require('../assets/bg_alt.jpg')}>
            <View style={{backgroundColor:bg_filter_color, flex:1}}>
            <SafeAreaView style={styles.safeAreaStyle}>
                <TouchableOpacity  onPress={()=> navigation.goBack()}>
                    <AntDesign name="arrowleft" size={35} style={styles.arrowLeft} />
                </TouchableOpacity>

                <View style={{flex:1 , alignItems:'center',justifyContent:'center',flexDirection:'row' , marginBottom:"7%"}}>
                    <Image source={require('../assets/bg.jpg')} style={styles.image}/>
                    <Text style={{fontSize:22, color:text_color_weak}}>Muhammed Enes</Text>
                </View>

                <View style={{flex:4}}>
                    <ProfileLists></ProfileLists>
                </View>


            </SafeAreaView>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    arrowLeft : {
        marginLeft:15,
        color:text_color_weak
    },
    image :{
        width:'30%',
        height:"80%" ,
        borderRadius:200,
        marginRight:20
    },
    safeAreaStyle: {
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+20 : 0,
    }
})
