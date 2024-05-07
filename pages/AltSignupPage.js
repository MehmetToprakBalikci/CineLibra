import { Button, Image, ImageBackground, StyleSheet, Text, View ,StatusBar, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { LoginButton } from '../components/LoginButton';
import {LoginTextfield} from "../components/LoginTextfield";
import {StackActions, useNavigation} from "@react-navigation/native";
import {colors} from "../components/colorProfile";
import {LoginPasswordField} from "../components/LoginPasswordField";

const background = require('../assets/bg_alt.jpg')

const main_strong = colors.main_strong
const main_weak = colors.main_weak
const accent_weak = colors.accent_weak
const accent_strong = colors.accent_strong
const text_color = colors.text_color
const main_color = colors.main
const accent_color = colors.accent

export default function AltStartPage() {
    const navigation = useNavigation()
    return (
        <View style={{flex:5}}>
            <View style={{flex:5, backgroundColor:'transparent'}}>

            </View>
            <View style={styles.cardStyle}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.signupLayout}>
                        <Text style={{color:text_color ,alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'5%'}}>Sign up now to continue.</Text>
                        <LoginTextfield value={'Username'}/>
                        <LoginTextfield value={'e-mail'}/>
                        <LoginPasswordField value={'Password'}/>

                        <TouchableOpacity onPress={()=> navigation.dispatch(StackActions.pop(1))}>
                            <LoginButton message={'Sign Up'}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{paddingBottom:'2%'}}>
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

    },
    cardStyle: {
        flex:8,
        backgroundColor:main_weak,
        borderRadius:15,
        shadowColor:'black',
        shadowRadius:20,
        shadowOffset:{height:5},
        shadowOpacity:1
    },
    signupLayout: {
        minWidth:'100%',
        flexDirection:'column',
        justifyContent:'space-evenly',
        flex:1,
        rowGap:'10%',
        paddingTop:'5%',
        paddingHorizontal:'10%'
    },
});
