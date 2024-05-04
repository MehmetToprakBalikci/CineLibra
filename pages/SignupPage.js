import { Button, Image, ImageBackground, StyleSheet, Text, View ,StatusBar, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { LoginButton } from '../components/LoginButton';
import {LoginTextfield} from "../components/LoginTextfield";
import {useNavigation} from "@react-navigation/native";
import {LoginPasswordField} from "../components/LoginPasswordField";

const background = require('../assets/bg.jpg')
export default function SignupPage() {
    const navigation = useNavigation()
    return (
        <View style={{flex:5}}>
            <ImageBackground source={background} style={{height:'110%', width:'100%', flex: 5, justifyContent:'center'}}>
                <Text style={{textShadowOffset: {height: 2} ,textShadowRadius:5 ,textShadowColor:'black', fontWeight:'bold',opacity:0.75, fontSize:60, color:'white',paddingLeft:'15%', paddingTop:'10%'}}>CineLibra</Text>
            </ImageBackground>
            <View style={{flex:8, backgroundColor:'white', borderRadius:15, shadowColor:'black', shadowRadius:20, shadowOffset:{height:5}, shadowOpacity:1}}>
                <SafeAreaView style={styles.container}>
                    <View style={{minWidth:'100%',flexDirection:'column', justifyContent:'space-evenly', flex:1, rowGap:'10%', paddingTop:'5%', paddingHorizontal:'10%'}}>
                        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'5%'}}>Welcome! Lets get you started.</Text>
                        <LoginTextfield value={'Username'}/>
                        <LoginTextfield value={'e-mail'}/>
                        <LoginPasswordField value={'Password'}/>

                        <TouchableOpacity onPress={()=> navigation.navigate('HomePage')}>
                            <LoginButton message={'Sign Up'}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate('SearchPage')} >
                            <LoginButton message={'Continue W/ Google'}/>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',

    }
});
