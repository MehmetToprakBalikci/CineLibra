
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import StartPage from './pages/MoviePages/StartPage';
import AltSignupPage from './pages/MoviePages/AltSignupPage';
import SwitchHomePanel from './pages/SwitchPanels/SwitchInHomePage';
import SwitchSearchPage from './pages/SwitchPanels/SwitchSearchPage';
import MoviePage from './pages/MoviePages/MoviePage';
import Profile from './screens/Profile';
import bookHome from "./pages/BookPages/bookHome";
import bookSearchPage from "./pages/BookPages/bookSearchPage";

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

            <Stack.Screen name="bookHome" component={bookHome} options={{
                headerShown:false,
                title:'bookHome',
                gestureEnabled:false,
            }}/>

            <Stack.Screen name="bookSearchPage" component={bookSearchPage} options={{
                headerShown:false,
                title:'bookSearchPage'
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

