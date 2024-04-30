import { Button, Image, ImageBackground, StyleSheet, Text, View ,StatusBar, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { LoginButton } from '../components/LoginButton';
import {LoginTextfield} from "../components/LoginTextfield";
import {useNavigation} from "@react-navigation/native";

const background = require('../assets/bg.jpg')
export default function StartPage() {
    const navigation = useNavigation()
    return (
        <View style={{flex:5}}>
            <ImageBackground source={background} style={{height:'110%', width:'100%', flex: 5, justifyContent:'center'}}>
                <Text style={{textShadowOffset: {height: 2} ,textShadowRadius:5 ,textShadowColor:'black', fontWeight:'bold',opacity:0.75, fontSize:60, color:'white',paddingLeft:'15%', paddingTop:'10%'}}>CineLibra</Text>
            </ImageBackground>
            <View style={{flex:8, backgroundColor:'white', borderRadius:0, shadowColor:'black', shadowRadius:20, shadowOffset:{height:5}, shadowOpacity:1}}>
                <SafeAreaView style={styles.container}>
                    <View style={{minWidth:'100%',flexDirection:'column', justifyContent:'space-evenly', flex:1, rowGap:'10%', paddingTop:'5%', paddingHorizontal:'10%'}}>
                        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'5%'}}>Welcome! Lets get you started.</Text>
                        <LoginTextfield value={'e-mail'}/>
                        <LoginTextfield value={'password'}/>

                        <TouchableOpacity onPress={()=> navigation.navigate('HomePage')}>
                            <LoginButton message={'Log In'}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <LoginButton message={'Continue W/ Google'}/>
                        </TouchableOpacity>

                        <View style={{margin:'10%' , flexDirection:'row'}}>
                            <Text style={{alignSelf:'center'}}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
                                <Text style={{textShadowOffset:{height: 2, width:0} ,textShadowRadius:1 ,textShadowColor:'gray' ,marginLeft:'10%', fontWeight:'bold', color:'#EF996A'} }> Sign Up!</Text>
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
