import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Appearance,
    KeyboardAvoidingView, StatusBar
} from 'react-native';

import { LoginButton } from '../../components/MoviePageComponents/LoginButton';
import {LoginPasswordField} from '../../components/MoviePageComponents/LoginPasswordField'
import {LoginTextfield} from "../../components/MoviePageComponents/LoginTextfield";
import {useNavigation} from "@react-navigation/native"
import {colors} from "../../components/MoviePageComponents/colorProfile"
import {modeDependencies} from "../../components/MoviePageComponents/colorProfile";
import React, { useEffect } from 'react';
import { auth } from '../../firebase';
import {signInWithEmailAndPassword } from 'firebase/auth';

const background = require('../../assets/bg_alt.jpg')

const main_strong = colors.main_strong
const main_weak = colors.main_weak
const accent_weak = colors.accent_weak
const accent_strong = colors.accent_strong
const text_color = colors.text_color
const main_color = colors.main
const accent_color = colors.accent

const statusbar_color = modeDependencies.statusbar_color

StatusBar.setBarStyle(statusbar_color)


export default function StartPage() {
    console.log("start page içindeyim");
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigation = useNavigation()
     useEffect(() => {
         const unsubscribe = auth.onAuthStateChanged(user => {
           console.log("auth id is "+auth.currentUser.uid);
          if (user) {
          console.log(user.name+" is entered the system");
            navigation.navigate("HomePage")

            }
            else
            console.log("null user");
          })

          return () => unsubscribe();
        }, [navigation]);
      const handleLogIn = async () => {
        console.log("starting login handler");
        console.log("email is "+ email );
        console.log("Password is "+ password);

          try {
            console.log("Attempting to navigate to HomePage...");
              const authUserInfos = await signInWithEmailAndPassword(auth, email, password);
                const user = authUserInfos.user;
                console.log(user.email + " Successfully logged in");
              navigation.navigate("HomePage")
              console.log("Navigation to HomePage successful.");

          } catch (error) {
              alert(error.message);
          }

      }






    return (
        <KeyboardAvoidingView style={{flex:5}}>
            <ImageBackground source={background} blurRadius={35} style={styles.backgroundImage}>
                <Text style={styles.titleText}>CineLibra</Text>
            </ImageBackground>
            <View style={styles.cardStyle}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.loginLayout}>

                        <Text style={{color:text_color ,alignSelf:'center', fontWeight:'bold', fontSize:20, paddingVertical:'5%'}}>Welcome! Lets get you started.</Text>
                        <LoginTextfield
                        placeholder={"e-mail"}
                        inputValue={email}
                        setEmail={setEmail}
                        />

                        <LoginPasswordField
                        placeholder={'password'}
                        password={password}
                        setPassword={setPassword}

                        />

                        <TouchableOpacity onPress={()=> {console.log("login pressed");handleLogIn()}}>
                            <LoginButton message={'Log In'}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <LoginButton message={'Continue W/ Google'}/>
                        </TouchableOpacity>


                        <View style={{paddingTop:'10%', flexDirection:'row', justifyContent:'center'}}>
                            <Text style={{alignSelf:'center', color:text_color}}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('AltSignupPage')}>
                                <Text style={{marginLeft:'10%', fontWeight:'bold', color:accent_weak }}> Sign Up!</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',

    },
    loginLayout: {
        minWidth:'100%',
        flexDirection:'column',
        justifyContent:'space-evenly',
        flex:1,
        //rowGap:'10%',
        paddingTop:'5%',
        paddingHorizontal:'10%',
        paddingBottom: '10%'
    },
    backgroundImage: {
        height:'110%',
        width:'100%',
        flex: 5,
        justifyContent:'center'
    },
    titleText: {
        textShadowOffset: {height: 2} ,
        textShadowRadius:5 ,
        textShadowColor:'black',
        fontWeight:'bold',opacity:0.75,
        fontSize:60, color:'white',
        alignSelf:'center',
        paddingTop:'10%'
    },
    cardStyle: {
        flex:8,
        backgroundColor:main_weak,
        borderRadius:15,
        shadowColor:'black',
        shadowRadius:30,
        shadowOffset:{height:5},
        shadowOpacity:1
    }
});
