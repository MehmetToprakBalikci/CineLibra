
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import StartPage from './pages/MoviePages/StartPage';
import AltSignupPage from './pages/MoviePages/AltSignupPage';
import MoviePage from './pages/MoviePages/MoviePage';
import Profile from './screens/Profile';
import BookHomePage from "./pages/BookPages/BookHomePage";
import BookSearchPage from "./pages/BookPages/BookSearchPage";
import SwitchSearchPage from './pages/SwitchPanels/moviePanels/SwitchSearchPage';
import SwitchHomePanel from './pages/SwitchPanels/moviePanels/SwitchInHomePage';

import SwitchBookHomePanel from './pages/SwitchPanels/bookPanels/SwitchBookHomePanel';
import SwitchBookSearchPanel from './pages/SwitchPanels/bookPanels/SwitchBookSearchPanel';
import BookPage from "./pages/BookPages/BookPage";
import {forModalPresentationIOS} from "@react-navigation/stack/src/TransitionConfigs/CardStyleInterpolators";
import {Dimensions} from "react-native";
import { SignOutScreen } from './screens/SignOutScreen';
import BookProfile from "./screens/BookProfile";

const Stack = createStackNavigator();
const windowHeight = Dimensions.get('window').height;

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
                 gestureEnabled:true,
                 gestureResponseDistance: Platform.OS === 'ios' ? windowHeight : windowHeight,
                cardStyleInterpolator: Platform.OS === 'ios' ? CardStyleInterpolators.forModalPresentationIOS : CardStyleInterpolators.forRevealFromBottomAndroid,
                presentation: 'transparentModal',

            }}/>



             <Stack.Screen name="SearchPage" component={SwitchSearchPage} options={{
                headerShown:false,
                title:'SearchPage'
            }}/>
              <Stack.Screen name="bookHome" component={SwitchBookHomePanel} options={{
                headerShown:false,
                title:'BookHomePage',
                gestureEnabled:false,
            }}/>


            <Stack.Screen name="HomePage" component={SwitchHomePanel} options={{
                headerShown:false,
                title:'HomePage',
                gestureEnabled:false,
            }}/>


            <Stack.Screen name="bookSearchPage" component={SwitchBookSearchPanel} options={{
                headerShown:false,
                title:'bookSearchPage'
            }}/>

            <Stack.Screen name="MoviePage" component={MoviePage} options={{
                headerShown:false,
                title:'MoviePage',
                gestureDirection:'horizontal',
                animationEnabled:false,
            }}/>
            <Stack.Screen name="BookPage" component={BookPage} options={{
                headerShown:false,
                animationEnabled:false,
                title:'BookPage',
                gestureDirection:'horizontal',
            }}/>
            <Stack.Screen name="Profile" component={Profile} options={{
                headerShown:false,
                animationEnabled:false,

            }}/>
            <Stack.Screen name="BookProfile" component={BookProfile} options={{
                headerShown:false,
                animationEnabled:false,

            }}/>
            <Stack.Screen name="SignOut" component={SignOutScreen} options={{
                headerShown:false,
                title:'SignOut',
                gestureDirection:'vertical',
                gestureEnabled:true,
                gestureResponseDistance: Platform.OS === 'ios' ? windowHeight : windowHeight,
                cardStyleInterpolator: Platform.OS === 'ios' ? CardStyleInterpolators.forModalPresentationIOS : CardStyleInterpolators.forRevealFromBottomAndroid,
                presentation: 'transparentModal',
            }}/>
        </Stack.Navigator>
    )
}
