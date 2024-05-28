import { Text, TouchableWithoutFeedback, View } from "react-native"
import { TouchableOpacity } from "react-native"

import {colors} from "./colorProfile"

const main_strong = colors.main_strong
const main_weak = colors.main_weak
const accent_weak = colors.accent_weak
const accent_strong = colors.accent_strong
const text_color = colors.text_color
const accent_color = colors.accent


export  const LoginButton = ({message}) =>{
    return(
        <View style={{paddingTop:'0%'}}>
            <View style={{
                maxWidth:'100%',
                width:'100%',
                paddingHorizontal:'2%',
                paddingVertical:'3%',
                backgroundColor:accent_weak,
                borderRadius:50,

                shadowRadius:5,
                shadowColor:'black',
                shadowOpacity:0.4,
                shadowOffset:{height: 3},

                justifyContent:"center",
                alignItems:"center",

                borderWidth:2,
                borderColor:accent_color,
            }} >
                <Text style={{fontSize:20,fontWeight:'400', color:'white'}} >{message}</Text>
            </View>
        </View>
    )

}
