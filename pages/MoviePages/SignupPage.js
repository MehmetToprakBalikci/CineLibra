import { Button, Image, ImageBackground, StyleSheet, Text, View ,StatusBar, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { LoginButton } from '../../components/MoviePageComponents/LoginButton';
import {LoginTextfield} from "../../components/MoviePageComponents/LoginTextfield";
import {useNavigation} from "@react-navigation/native";
import {LoginPasswordField} from "../../components/MoviePageComponents/LoginPasswordField";

const background = require('../../assets/bg.jpg')
export default function SignupPage() {
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [username,setUserName] = React.useState('');
    const navigation = useNavigation()
    const handleSignUp = async () => {
        console.log("starting SignUp handler");
        console.log("e-mail "+email);
        console.log("password "+password);
        try {
            const authUserInfos = await createUserWithEmailAndPassword(auth, email, password);
            const user = authUserInfos.user;
            console.log(user.email + " Successfully signed up");
            // await updateProfile(user, {
            //     displayName: username,
            //   });
            //   console.log("Username set to: " + username);
            //   navigation.navigate('HomePage')

        } catch (error) {
            alert(error.message);
        }
        

    }
    return (
        <View style={{flex:5}}>
            <ImageBackground source={background} style={{height:'110%', width:'100%', flex: 5, justifyContent:'center'}}>
                <Text style={{textShadowOffset: {height: 2} ,textShadowRadius:5 ,textShadowColor:'black', fontWeight:'bold',opacity:0.75, fontSize:60, color:'white',paddingLeft:'15%', paddingTop:'10%'}}>CineLibra</Text>
            </ImageBackground>
            <View style={{flex:8, backgroundColor:'white', borderRadius:15, shadowColor:'black', shadowRadius:20, shadowOffset:{height:5}, shadowOpacity:1}}>
                <SafeAreaView style={styles.container}>
                    <View style={{minWidth:'100%',flexDirection:'column', justifyContent:'space-evenly', flex:1,   paddingBottom: '10%', paddingTop:'5%', paddingHorizontal:'10%'}}>
                        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'5%'}}>Welcome! Lets get you started.</Text>
                        <LoginTextfield
                        placeholder={"username"}
                        username={username}
                        setUserName={setUserName}
                        />
                        <LoginTextfield value={'e-mail'}
                        placeholder={"e-mail"}
                        email={email}
                        setEmail={setEmail}
                        />
                        <LoginPasswordField value={'Password'}
                        placeholder={'password'}
                        password={password}
                        setPassword={setPassword}
                        />

                        <TouchableOpacity onPress={()=>handleSignUp()}>
                            <LoginButton message={'Sign Up'}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> navigation.navigate('SearchPage')} >
                            <LoginButton message={'Continue W/ Google'}/>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',

    }
});
