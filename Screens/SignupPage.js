import { Button, Image, ImageBackground, StyleSheet, Text, View ,StatusBar, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { LoginButton } from '../Components/LoginButton';
import {LoginTextfield} from "../Components/LoginTextfield";

const background = require('../assets/bg.jpg')
export default function SignupPage() {
    return (
        <View style={{flex:5}}>
            <ImageBackground source={background} style={{height:'100%', width:'100%', flex: 6, justifyContent:'center'}}>
                <Text style={{textShadowOffset: {height: 2} ,textShadowRadius:5 ,textShadowColor:'black', fontWeight:'bold',opacity:0.75, fontSize:60, color:'white',paddingLeft:'15%', paddingTop:'25%'}}>CineLibra</Text>
            </ImageBackground>
            <View style={{flex:8, backgroundColor:'white', shadowColor:'black', shadowRadius:20, shadowOffset: {height:-10, width:0}, shadowOpacity:0.7}}>
                <SafeAreaView style={styles.container}>
                    <View style={{minWidth:'100%' ,flexDirection:'column', justifyContent:'space-evenly', flex:5, paddingVertical:'10%', paddingHorizontal:'10%'}}>
                        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'0%'}}>Sign Up</Text>
                        <LoginTextfield value={'User Name'}/>
                        <LoginTextfield value={'e-mail'}/>
                        <LoginTextfield value={'password'}/>
                        <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'white', marginTop:'5%'}}>
                            <LoginButton message={'W/ Google'}/>
                            <LoginButton message={'Sign Up'}/>
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
