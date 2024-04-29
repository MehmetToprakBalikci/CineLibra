import { Component } from "react";
import { View , Text } from "react-native";


// created  class component with name Foo 
class Foo extends Component{

        render(){


            return <View style={{backgroundColor:"#FFE4FA",borderRadius:10, padding:5 , width:"80%",alignItems:'center' , margin:5}}>
                <Text style = {{fontSize: 20 , fontWeight:'bold'}}>Muhammed Enes Gokdeniz</Text>
            </View>
        }

}

export default Foo;