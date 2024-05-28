import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {colors} from "./colorProfile";

const main_strong = colors.main_strong
const text_color = colors.text_color
const main_color = colors.main
const text_color_weak = colors.text_color_weak

// placeholder={"e-mail"}
//                         value={email}
//                         onChangeText={onChangeEmail({value})}
//                         style={{keyboardType:'email-address'}}
//  ({placeholder,inputValue,setInput})
export  const LoginTextfield = props =>{
    const handleUserNameChange = text =>
        props.placeholder === 'user-name'
          ? props.setUserName(text)
          : props.placeholder === 'e-mail'
            ? props.setEmail(text)
            : null;



    return(
        <View>
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
                placeholder={props.placeholder}
                value={props.inputValue}
                placeholderTextColor={text_color_weak}
                keyboardType={'email-address'}
                textAlign={'center'}
                autoComplete={"off"}
                autoCapitalize={"none"}
                onChangeText={handleUserNameChange}
                />
        </View>
    )
}
