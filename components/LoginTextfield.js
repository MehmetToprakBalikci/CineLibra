import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';



export  const LoginTextfield = ({value}) =>{
    const [number, onChangeNumber] = React.useState('');
    return(
        <View style={{flex:0.75, justifyContent:'center'}}>
            <TextInput
                style={{
                    maxWidth:'100%' ,
                    width:'100%',
                    shadowRadius:5,
                    shadowColor:'gray',
                    shadowOpacity:0.4,
                    shadowOffset:{height: 4},
                    paddingVertical:'4%',
                    borderRadius:50,
                    fontSize:16,
                    fontWeight:'normal',
                    borderColor:'rgb(209, 206, 207)',
                    borderWidth:2,
                    backgroundColor:'rgb(229, 226, 227)'
            }}
                placeholder={value}
                keyboardType={'email-address'}
                textAlign={'center'}
                autoComplete={"off"}
                autoCapitalize={"none"}
                onChangeNumber={onChangeNumber}/>
        </View>
    )
}
