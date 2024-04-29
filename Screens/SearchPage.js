import {
    Button,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { LoginButton } from '../Components/LoginButton';
import {LoginTextfield} from "../Components/LoginTextfield";
import React from "react";
import {PosterComponent} from "../Components/PosterComponent";
import {SearchTextfield} from "../Components/SearchTextfield";

const background = require('../assets/bg.jpg')
export default function SearchPage() {
    const [number, onChangeNumber] = React.useState('');
    return (
        <View style={{flex:1}}>
            <ImageBackground source={background} style={{height:'110%', width:'100%', flex: 0.3, justifyContent:'flex-end', alignItems:'center'}}>
                <View style={{backgroundColor:'red' ,flexDirection:'row', flex:1, paddingHorizontal:'7%', marginRight:'78%', marginTop:'14%'}}>
                    <LoginButton message={'<'}/>
                </View>
                <SearchTextfield value={'Search'}/>
            </ImageBackground>
            <ScrollView style={{shadowOffset:{height: -10} ,shadowRadius:100 ,shadowOpacity:1 ,shadowColor:'black' ,flex:1, backgroundColor:'white', borderRadius:10}}>
                <SafeAreaView style={{flex:1}}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly', flex:1, paddingVertical:'2%', paddingHorizontal:'7%'}}>
                        <Text style={{marginRight:'20%', flex:1, fontWeight:'bold', fontSize:16, marginTop:'7%'}}>Search Results</Text>
                        <LoginButton message={'Filter'}/>
                    </View>
                    <View style={{flex:1}}>
                        <PosterComponent title={'JOKER'} explanation={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'}/>
                        <PosterComponent title={'JOKER'} explanation={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'}/>
                        <PosterComponent title={'JOKER'} explanation={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'}/>
                    </View>
                </SafeAreaView>
            </ScrollView>
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
