
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import StartPage from './pages/StartPage';
import SignupPage from './pages/AltSignupPage';
import SearchPage from './pages/SearchPage';
//import AltSignupPage from './pages/AltSignupPage';


import { useNavigation } from '@react-navigation/native';
import HomePage from "./pages/HomePage";
import SwitchHomePanel from './pages/SwitchPanels/SwitchInHomePage';
import SwitchItemDetailPage from './pages/SwitchPanels/SwitchItemDetailPage';
import SignOutScreen from './screens/SignOutScreen';
import AltSignUpPage from './pages/AltSignupPage'

const Stack = createStackNavigator();

export const Navigator = () => {

    return (

        <Stack.Navigator>

            <Stack.Screen name="StartPage" component={StartPage} options={{
                headerShown:false,

            }}/>

             <Stack.Screen name="AltSignupPage" component={AltSignUpPage} options={{
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
            <Stack.Screen name="HomePage" component={SwitchHomePanel} options={{
                headerShown:false,
                title:'HomePage',
                gestureEnabled:false,
            }}/>
             <Stack.Screen name="ItemDetailPage" component={SwitchItemDetailPage} options={{
                headerShown:false,
                title:'HomePage',
                gestureEnabled:false,
                title:'HomePage',
                gestureEnabled:false,
            }}/>
        </Stack.Navigator>
    )


}