



import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import StartPage from './pages/StartPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import AltSignupPage from './pages/AltSignupPage';


import { useNavigation } from '@react-navigation/native';
import HomePage from "./pages/HomePage";
import ProfilePage from './pages/ProfilePage';

const Stack = createStackNavigator();

export const Navigator = () => {

    return (

        <Stack.Navigator>

            <Stack.Screen name="StartPage" component={StartPage} options={{
                headerShown:false,

            }}/>

            <Stack.Screen name="AltSignupPage" component={AltSignupPage} options={{
                headerShown:false,
                title:'SignUpPage',
                gestureDirection:'vertical',
                cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                presentation: 'transparentModal',

            }}/>

            <Stack.Screen name="SignupPage" component={SignupPage} options={{
                headerShown:false,
                title:'SignUpPage',
                cardShadowEnabled:true,
                gestureDirection:'vertical',
                cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS

            }}/>

            <Stack.Screen name="SearchPage" component={SearchPage} options={{
                headerShown:false,
                title:'SearchPage'
            }}/>
            <Stack.Screen name="HomePage" component={HomePage} options={{
                headerShown:false,
                title:'HomePage',
                gestureEnabled:false,
            }}/>
            <Stack.Screen name="ProfilePage" component={ProfilePage} options={{
                headerShown:false,
                
                
            }}/>
        </Stack.Navigator>
    )


}
