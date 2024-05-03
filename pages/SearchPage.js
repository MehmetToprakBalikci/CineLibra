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

import { LoginButton } from '../components/LoginButton';
import React from "react";
import {PosterComponent} from "../components/PosterComponent";
import {SearchTextfield} from "../components/SearchTextfield";


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
        flex: 1,
    },
    leftBarRow: {
        height: '7%',
        flexDirection: "row",
        marginHorizontal: '5%',
        justifyContent:'space-between'
    },
    searchBar: {
        height: '80%',
        width: '80%',
        backgroundColor: "rgba(0, 0, 0 ,0.3)",
    },
    lists: {
        height: '100%',
        width: '100%',
    },
    listView: {
        flex:1
    },
    safeArea: {
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.5)',
    }
});


