import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"



export const Box = () => {

    const [counter , setCounter] = useState(0)

    return (

        <View style={{alignItems:"center"}}>
            <TouchableOpacity onPress={() => {
                setCounter(prev => prev+1)
            
        }} >

             <View style={{

                backgroundColor:'#DFBDD9',
                width:100,
                height:100,
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center'

            }}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Press</Text>


            </View>
            
        </TouchableOpacity>

        <Text style={{fontSize:30 , marginTop:5}}>{counter}</Text>




        </View>

        
       
        

    );




}

