



import {createStackNavigator} from '@react-navigation/stack'
import StartPage from './pages/StartPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';


import { useNavigation } from '@react-navigation/native';
import HomePage from "./pages/HomePage";

const Stack = createStackNavigator();

export const Navigator = () => {

    return (

        <Stack.Navigator>

            <Stack.Screen name="StartPage" component={StartPage} options={{
                headerShown:false,

            }}/>
            <Stack.Screen name="SignupPage" component={SignupPage} options={{
            headerShown:false,
            title:'SignUpPage',

            }}/>

            <Stack.Screen name="SearchPage" component={SearchPage} options={{
                headerShown:false,
                title:'SearchPage'
            }}/>
            <Stack.Screen name="HomePage" component={HomePage} options={{
                headerShown:false,
                title:'HomePage'
            }}/>
        </Stack.Navigator>
    )


}
