
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LogIn from './Screens/LogIn'
import Home from './Screens/Home'
import SignUp from './Screens/SignUp'



const Stack = createNativeStackNavigator()


export const Navigator = () => {
    return(

        <Stack.Navigator>

            <Stack.Screen name = 'Home' component={Home} 
            options={{title:'HomePage', headerShown:false} }/>
            <Stack.Screen name='LogIn' component={LogIn}
            options={{headerShown:false}}/>
            <Stack.Screen name='SignUp' component={SignUp}
            options={{headerShown:false}}/>


        </Stack.Navigator>
    )







}