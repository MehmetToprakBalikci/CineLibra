import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';



export  const LoginTextfield = ({value}) =>{
    const [number, onChangeNumber] = React.useState('');
    return(
        <View style={{flex:0.75, justifyContent:'center'}}>
            <TextInput
                style={{width:'100%', shadowRadius:5, shadowColor:'gray', shadowOpacity:0.5, shadowOffset:{height: 5},
                    paddingVertical:'4%', borderRadius:15, fontSize:20, fontWeight:'bold', borderColor:'gray', borderWidth:2, backgroundColor:'#F0F0F0'}}
                placeholder={value}
                keyboardType={'email-address'}
                textAlign={'center'}
                onChangeNumber={onChangeNumber}/>
        </View>
    )
}
