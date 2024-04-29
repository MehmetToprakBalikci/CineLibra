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

import { LoginButton } from './LoginButton';
import {LoginTextfield} from "./LoginTextfield";
import React from "react";
import {PosterComponent} from "./PosterComponent";

const background = require('./bg.jpg')
export default function App() {
    const [number, onChangeNumber] = React.useState('');
    return (
        <View style={{flex:1}}>
            <ImageBackground source={background} style={{height:'110%', width:'100%', flex: 0.3, justifyContent:'flex-end', alignItems:'center'}}>
                <View style={{flexDirection:'row', justifyContent:'space-evenly', flex:1, paddingVertical:'2%', paddingHorizontal:'7%', marginRight:'78%', marginTop:'14%'}}>
                    <TouchableOpacity style={{padding: 0, flex:1}}>
                        <View style={{width:'60%',
                            height:'100%' ,
                            alignSelf:'flex-end',
                            backgroundColor:'#F6995C',
                            borderRadius:10,
                            justifyContent:"center",
                            alignItems:"center",
                            marginVertical:10,
                            paddingHorizontal:20
                        }} >
                            <Text style={{fontSize:10,fontWeight:"bold", color:'white'}} >{'<'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={{height:'25%', width:350,
                        borderRadius:10, marginVertical:20, fontSize:20, fontWeight:'bold', borderColor:'#D0D0D0', borderWidth:2, backgroundColor:'#D0D0D0', opacity:0.9}}
                    placeholder={'  Search'}
                    keyboardType={'email-address'}
                    textAlign={'left'}
                    onChangeNumber={onChangeNumber}/>
            </ImageBackground>
            <ScrollView style={{flex:1, backgroundColor:'white', borderRadius:10}}>
                <SafeAreaView style={{flex:1}}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly', flex:1, paddingVertical:'2%', paddingHorizontal:'7%'}}>
                        <Text style={{marginRight:'20%', flex:1, fontWeight:'bold', fontSize:16, marginTop:'7%'}}>Search Results</Text>
                        <TouchableOpacity style={{padding: 0, flex:1}}>
                            <View style={{width:'60%',
                                height:50 ,
                                alignSelf:'flex-end',
                                backgroundColor:'#F6995C',
                                borderRadius:10,
                                justifyContent:"center",
                                alignItems:"center",
                                marginVertical:10,
                                paddingHorizontal:20
                            }} >
                                <Text style={{fontSize:10,fontWeight:"bold", color:'white'}} >{'FILTER'}</Text>
                            </View>
                        </TouchableOpacity>
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
