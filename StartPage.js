import { Button, Image, ImageBackground, StyleSheet, Text, View ,StatusBar, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { LoginButton } from './LoginButton';
import {LoginTextfield} from "./LoginTextfield";
import {useNavigation} from "@react-navigation/native";

const background = require('./bg.jpg')
export default function StartPage() {
    const navigation = useNavigation()
    return (
        <View style={{flex:5}}>
            <ImageBackground source={background} style={{height:'100%', width:'100%', flex: 5, justifyContent:'center'}}>
                <Text style={{textShadowOffset: {height: 2} ,textShadowRadius:5 ,textShadowColor:'black', fontWeight:'bold',opacity:0.75, fontSize:60, color:'white',paddingLeft:'15%', paddingTop:'25%'}}>CineLibra</Text>
            </ImageBackground>
            <View style={{flex:8, backgroundColor:'white'}}>
                <SafeAreaView style={styles.container}>
                    <View style={{minWidth:'100%',flexDirection:'column', justifyContent:'space-evenly', flex:1, paddingVertical:'5%', paddingHorizontal:'10%', backgroundColor:'white'}}>
                        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'5%'}}>Welcome! Lets get you started.</Text>
                        <LoginTextfield value={'e-mail'}/>
                        <LoginTextfield value={'password'}/>
                        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between', backgroundColor:'white', flex: 1}}>
                            <LoginButton message={'Continue With Google'}/>
                            <TouchableOpacity>
                                <LoginButton message={'Log In'}/>   
                            </TouchableOpacity>
                            
                        </View>
                        <TouchableOpacity onPress={() => {navigation.navigate('SignupPage')}}>
                            <LoginButton message={'Sign Up'}/>
                        </TouchableOpacity>
                        <View style={{margin:'10%' , flexDirection:'row'}}>
                            <Text style={{alignSelf:'center'}}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
                                <Text style={{marginLeft:10, fontWeight:'bold'} }> Sign Up!</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,//flex 1 tum ekrani kaplayacak
        justifyContent:'center',
        alignItems:'center',

    }
});
