import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react'
import {StyleSheet,ImageBackground} from 'react-native'
var bg=require('../img/splash.png')
const SplashScreen=({navigation})=>{
    useEffect(
        ()=>{
            const timer=setTimeout(()=>{
                navigation.navigate('BottomNav')
            },3000);
            return()=>clearTimeout(timer);

        },[]
    );
        return (
           <ImageBackground source={bg} style={styles.container}/>
        )
    }

const styles=StyleSheet.create({
  container: {
     width:'100%',
     height:'100%',
  }
});
export default SplashScreen;