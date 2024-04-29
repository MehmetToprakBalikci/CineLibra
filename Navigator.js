
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LogIn from './Screens/LogIn'
import Home from './Screens/Home'


const Stack = createNativeStackNavigator()


export const Navigator = () => {
    return(

        <Stack.Navigator>

            <Stack.Screen name = 'Home' component={Home} 
            options={{title:'HomePage'}}/>
            <Stack.Screen name='LogIn' component={LogIn}/>


        </Stack.Navigator>
    )







}