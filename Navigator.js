



import {createStackNavigator} from '@react-navigation/stack'
import StartPage from './StartPage';
import SignupPage from './SignupPage';
import SearchPage from './SearchPage';


import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export const Navigator = () => {

    return (

        <Stack.Navigator>

            <Stack.Screen name="StartPage" component={StartPage} options={{
                headerShown:false,

            }}/>
            <Stack.Screen name="SignupPage" component={SignupPage} options={{

            title:'SignUpPage',

            }}/>
            
            <Stack.Screen name="searchPage" component={SearchPage} options={{
                title:'SearchPage'
            }}/>

        </Stack.Navigator>
    )


}
