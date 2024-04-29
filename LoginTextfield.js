import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';



export  const LoginTextfield = ({value}) =>{
    const [number, onChangeNumber] = React.useState('');
    return(
        <TextInput
            style={{height:'10%', width:350,
                borderRadius:10, marginVertical:10, fontSize:20, fontWeight:'bold', borderColor:'gray', borderWidth:2, backgroundColor:'#F0F0F0'}}
            placeholder={value}
            keyboardType={'email-address'}
            textAlign={'center'}
            onChangeNumber={onChangeNumber}/>
    )
}
