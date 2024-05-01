import { Button, Image, ImageBackground, StyleSheet, Text, View ,StatusBar, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { LoginButton } from '../components/LoginButton';
import {LoginTextfield} from "../components/LoginTextfield";
import {StackActions, useNavigation} from "@react-navigation/native";

const background = require('../assets/bg_25blur.png')
export default function StartPage() {
    const navigation = useNavigation()
    return (
        <View style={{flex:5}}>
            <View style={{flex:5, backgroundColor:'transparent'}}>

            </View>
            <View style={{flex:8, backgroundColor:'white', borderRadius:15, shadowColor:'black', shadowRadius:20, shadowOffset:{height:5}, shadowOpacity:1}}>
                <SafeAreaView style={styles.container}>
                    <View style={{minWidth:'100%',flexDirection:'column', justifyContent:'space-evenly', flex:1, rowGap:'10%', paddingTop:'5%', paddingHorizontal:'10%'}}>
                        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'5%'}}>Welcome! Lets get you started.</Text>
                        <LoginTextfield value={'Username'}/>
                        <LoginTextfield value={'e-mail'}/>
                        <LoginTextfield value={'Password'}/>

                        <TouchableOpacity onPress={()=> navigation.navigate('HomePage')}>
                            <LoginButton message={'Sign Up'}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.dispatch(StackActions.pop(1))} >
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
        flex: 1,//flex 1 tum ekrani kaplayacak
        justifyContent:'center',
        alignItems:'center',

    }
});
