import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {colors} from "./colorProfile";

const main_strong = colors.main_strong
const text_color = colors.text_color
const main_color = colors.main
const text_color_weak = colors.text_color_weak

export  const LoginTextfield = ({value,isSecure}) =>{
    const [number, onChangeNumber] = React.useState('');
    return(
        <View style={{flex:0.75, justifyContent:'center'}}>
            <TextInput
                style={{
                    maxWidth:'100%' ,
                    width:'100%',
                    shadowRadius:5,
                    shadowColor:'black',
                    shadowOpacity:0.4,
                    shadowOffset:{height: 4},
                    paddingVertical:'4%',
                    borderRadius:50,
                    fontSize:16,
                    fontWeight:'normal',
                    borderColor:main_strong,
                    borderWidth:2,
                    backgroundColor:main_color,
                    color:text_color,
            }}
                placeholder={value}
                placeholderTextColor={text_color_weak}
                secureTextEntry={isSecure}
                keyboardType={'email-address'}
                textAlign={'center'}
                autoComplete={"off"}
                autoCapitalize={"none"}
                onChangeNumber={onChangeNumber}/>
        </View>
    )
}
