import React,{useState} from 'react'
import { View,TextInput,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import Header from '../components/header'
var user=require('../img/More/user.png')
var sync=require('../img/More/sync.png')
var setting=require('../img/More/setting.png')
var info=require('../img/More/info-icon.png')


const MoreScreen =()=>{
  const [value,setValue] = useState("")
        return (
            <View >
              <Header></Header>
            
           <View >
             <TouchableOpacity><View style={{flexDirection:'row',padding:12,marginLeft:10}}>
               
                <Image source={user} style={{width:20,height:20,marginRight:20,}}/>
             <Text style={{fontWeight:'600',fontSize:16}}>Sign In with Amazon</Text></View></TouchableOpacity>
             <View style={styles.horizontalLine} />
             <TouchableOpacity><View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                <Image source={sync} style={{width:20,height:20,marginRight:20}}/>
             <Text style={{fontWeight:'600',fontSize:16}}>Sync</Text></View></TouchableOpacity>
             <View style={styles.horizontalLine} />
             <TouchableOpacity><View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                <Image source={setting} style={{width:20,height:20,marginRight:20}}/>
             <Text style={{fontWeight:'600',fontSize:16}}>Settings</Text></View></TouchableOpacity>
             <View style={styles.horizontalLine} />
             <TouchableOpacity><View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                <Image source={info} style={{width:20,height:20,marginRight:20}}/>
             <Text style={{fontWeight:'600',fontSize:16}}>Info</Text></View></TouchableOpacity>
             <View style={styles.horizontalLine} />

           </View>
          </View>
        )
    }
const styles=StyleSheet.create({
      container1:{
          backgroundColor:"#fff",
          height:60,
          paddingTop:6,
          flexDirection:"row",
          justifyContent:'space-around',
          paddingLeft:7
      
      },
      header:{
       
          marginBottom:10,
          paddingLeft:20,
          width:"80%",
          backgroundColor:"#f2f2f2",
          flexDirection:"row"
      },
      bell:{
          width:22,
          height:22,
          marginTop:10
      },
      horizontalLine:{
  
        borderBottomWidth: 0.8,
        borderBottomColor: '#dfe6e9',
        marginTop: 10,
        marginBottom: 10,
        marginLeft:20,
        marginRight:20
    },
    });
export default MoreScreen;
