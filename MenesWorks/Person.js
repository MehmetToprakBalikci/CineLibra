
// we are gonna use props property 

import { Text, View } from "react-native"

// we can add default value when user dont enter a value 
export const Person = ({name,lastName = "undefined",color = "#E1DABD"}) => {

    return <View style={{
        backgroundColor:color,
        width:300,
        height:100,
        borderRadius:50,
        alignItems:"center",
        justifyContent: 'center',
        margin:5
        

    }}>

        <Text style={{fontWeight:'bold'}}>Name:{name} </Text>
        <Text style={{fontWeight:'bold'}}>LastName:{lastName} </Text>

    </View>

}