import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';



export  const SearchTextfield = ({value}) =>{
    const [number, onChangeNumber] = React.useState('');
    return(
        <View style={{flex:1, justifyContent:'center', backgroundColor:'red'}}>
            <TextInput
                style={{height:'100%', width:'100%', shadowRadius:5, shadowColor:'gray', shadowOpacity:0.5, shadowOffset:{height: 5},
                    borderRadius:15, fontSize:20, fontWeight:'bold', borderColor:'gray', borderWidth:2, backgroundColor:'#F0F0F0'}}
                placeholder={value}
                keyboardType={'email-address'}
                textAlign={'center'}
                onChangeNumber={onChangeNumber}/>
        </View>
    )
}
