import { Text, TouchableWithoutFeedback, View } from "react-native"
import { TouchableOpacity } from "react-native"



export  const LoginButton = ({message}) =>{
    return(
        <View style={{padding: 0}}>
            <View style={{
                maxWidth:'100%',
                width:'100%',
                height:50,
                paddingHorizontal:'3%',
                marginVertical:'3%',
                backgroundColor:'rgb(235, 126, 72)',
                borderRadius:50,

                shadowRadius:5,
                shadowColor:'gray',
                shadowOpacity:0.4,
                shadowOffset:{height: '5%'},

                justifyContent:"center",
                alignItems:"center",

                borderWidth:2,
                borderColor:'rgb(205, 103, 0)',
            }} >
                <Text style={{fontSize:20,fontWeight:'400', color:'white'}} >{message}</Text>
            </View>
        </View>
    )

}
