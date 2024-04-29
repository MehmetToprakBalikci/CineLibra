import { Text,View } from "react-native"
import { TouchableOpacity } from "react-native"



export  const MyButton = ({message}) =>{

    return(
        
            <View style={{width:100,
                height:50 ,
                backgroundColor:'#AE77A4',
                borderRadius:50,
                justifyContent:"center",
                alignItems:"center",
                marginRight:10}} >
                <Text style={{fontSize:20,fontWeight:"bold"}} >{message}</Text>
            </View>
       
    )

}