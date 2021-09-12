import React  from 'react';
import {Image,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import HomeScreen from './HomeScreen';
import LibraryScreen from './LibraryScreen';
import StoreScreen from './StoreScreen';
import MoreScreen from './MoreScreen';

var home=require('../img/icons/home.png')
var library=require('../img/icons/library.png')
var store=require('../img/icons/store.png')
var more=require('../img/icons/more.png')
const Tab = createBottomTabNavigator();
const BottomNav =()=>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false}} >
            <Tab.Screen
            name="HomeScreen" component={HomeScreen} options={{
                tabBarIcon:({focused})=>(
                    <Image source={home} style={{
                        width:30,
                        height:30,
                        tintColor:focused ? '#1a7abf' : '#000',
                        marginTop:10,
                        
                      
                    }}/>
                    
                ),
                tabBarLabel:({focused}) => ( <Text style={{color:focused ? "#1a7abf":"#000" ,fontSize:10,marginTop:6 }}>
                HOME
              </Text>)
            }}
            />
               <Tab.Screen 
            name="LibraryScreen" component={LibraryScreen} options={{
                tabBarIcon:({focused})=>(
                    <Image source={library} style={{
                        width:22,
                        height:22,
                        tintColor:focused ? '#1a7abf' : '#000',
                        marginTop:10
                      
                    }}/>
                    
                ),
                tabBarLabel:({focused}) => ( <Text style={{color:focused ? "#1a7abf":"#000" ,fontSize:10,marginTop:6 }}>
                LIBRARY
              </Text>)
            }}
            />
              <Tab.Screen 
            name="StoreScreen" component={StoreScreen} options={{
                tabBarIcon:({focused})=>(
                    <Image source={store} style={{
                        width:24,
                        height:24,
                        tintColor:focused ? '#1a7abf' : '#000',
                        marginTop:10
                      
                    }}/>
                    
                ),
                tabBarLabel:({focused}) => ( <Text style={{color:focused ? "#1a7abf":"#000" ,fontSize:10,marginTop:6 }}>
               STORE
              </Text>)
            }}
            />
              <Tab.Screen 
            name="MoreScreen" component={MoreScreen} options={{
                tabBarIcon:({focused})=>(
                    <Image source={more} style={{
                        width:22,
                        height:20,
                        tintColor:focused ? '#1a7abf' : '#000',
                        marginTop:10
                      
                    }}/>
                    
                ),
                tabBarLabel:({focused}) => ( <Text style={{color:focused ? "#1a7abf":"#000" ,fontSize:10,marginTop:6 }}>
               MORE
              </Text>)
            }}
            />
        </Tab.Navigator>
    )
}
export default BottomNav;