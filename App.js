import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Navigator} from "./Navigator";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>

                <Navigator />

        </NavigationContainer>
    );
}