import { Button, Image, ImageBackground, StyleSheet, Text, View ,StatusBar, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { LoginButton } from './LoginButton';
import {LoginTextfield} from "./LoginTextfield";

const background = require('./bg.jpg')
export default function App() {
    return (
        <View style={{flex:5}}>
            <ImageBackground source={background} style={{height:'100%', width:'100%', flex: 6, justifyContent:'center'}}>
                <Text style={{fontWeight:'bold',opacity:0.75, fontSize:60, color:'white',paddingLeft:'15%', paddingTop:'25%'}}>CineLibra</Text>
            </ImageBackground>
            <View style={{flex:8, backgroundColor:'white'}}>
                <SafeAreaView style={styles.container}>
                    <View style={{flexDirection:'column', justifyContent:'space-evenly', flex:5, paddingVertical:'5%', paddingHorizontal:'10%'}}>
                        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'0%'}}>Sign Up</Text>
                        <LoginTextfield value={'User Name'}/>
                        <LoginTextfield value={'e-mail'}/>
                        <LoginTextfield value={'password'}/>
                        <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'white'}}>
                            <LoginButton message={'Continue W/ Google'}/>
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
