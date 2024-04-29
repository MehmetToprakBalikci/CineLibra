import { Text, TouchableWithoutFeedback, View } from "react-native"
import { TouchableOpacity } from "react-native"



export  const LoginButton = ({message}) =>{

    return(
        <TouchableOpacity style={{padding: 0}}>
            <View style={{width:'100%',
                height:50 ,
                backgroundColor:'#EB916E',
                borderRadius:10,
                justifyContent:"center",
                alignItems:"center",
                marginVertical:10,
                paddingHorizontal:20
            }} >
                <Text style={{fontSize:20,fontWeight:"bold", color:'white'}} >{message}</Text>
            </View>
        </TouchableOpacity>
    )

}
