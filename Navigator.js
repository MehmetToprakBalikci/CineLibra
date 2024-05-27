
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
            <Stack.Screen name="HomePage2" component={SwitchHomePanel} options={{
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
            }}/>
            <Stack.Screen name="BookPage" component={BookPage} options={{
                headerShown:false,
                title:'BookPage',
                gestureDirection:'horizontal',
            }}/>
            <Stack.Screen name="Profile" component={Profile} options={{
                headerShown:false,


            }}/>
        </Stack.Navigator>
    )
}