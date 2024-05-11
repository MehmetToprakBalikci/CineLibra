
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import StartPage from './pages/StartPage';
import AltSignupPage from './pages/AltSignupPage';
import SearchPage from './pages/SearchPage';
//import AltSignupPage from './pages/AltSignupPage';


import { useNavigation } from '@react-navigation/native';
import HomePage from "./pages/HomePage";
import SwitchHomePanel from './pages/SwitchPanels/SwitchInHomePage';
import SwitchItemDetailPage from './pages/SwitchPanels/SwitchItemDetailPage';
import SignOutScreen from './screens/SignOutScreen';
import AltSignUpPage from './pages/AltSignupPage'
import SwitchSearchPage from './pages/SwitchPanels/SwitchSearchPage';
import MoviePage from './pages/MoviePage';
import Profile from './screens/Profile';

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


            <Stack.Screen name="SearchPage" component={SwitchSearchPage} options={{
                headerShown:false,
                title:'SearchPage'
            }}/>
            <Stack.Screen name="HomePage" component={SwitchHomePanel} options={{
                headerShown:false,
                title:'HomePage',
                gestureEnabled:false,
            }}/>

            <Stack.Screen name="MoviePage" component={MoviePage} options={{
                headerShown:false,
                title:'MoviePage',
                gestureDirection:'horizontal',
            }}/>
            <Stack.Screen name="Profile" component={Profile} options={{
                headerShown:false,
                
                
            }}/>
        </Stack.Navigator>
    )
}

