import { useState } from "react"
import { Text, View ,Button} from "react-native"




export const  Counter = ({start}) => {
    // useState counter setcounter and initial state
    
    const [counter,setCounter] = useState(start);
    return (

        <View style = {{backgroundColor:'gray',
        width:200,
        height:200,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30}}>

            <Text style = {{fontSize:50,fontWeight:"bold"}} > {counter} </Text>
            <View style={{backgroundColor:'#E9ADD5' , borderRadius:5}}>
                <Button title="Increment" onPress={()=> setCounter(counter + 1)}/>
            </View>
            
            <Button title="Decrement" onPress={()=> setCounter(counter - 1)}/>


            


        </View>


    );


}