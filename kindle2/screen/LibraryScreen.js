import React,{useState} from 'react'
import { Text, View,Image,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
var lib=require('../img/lib.png')
var search=require('../img/icons/search.png')
var bell=require('../img/icons/Bell-icon.png')
const LibraryScreen =()=>{
    const [value,setValue] = useState("")
        return (
            <View>

                {/*header*/}

              <View style={styles.container1}>
                    <View style={styles.header}>
                        <Image source={search} style={styles.search}/>
                        <TextInput 
                            style={{flex:1}}
                            placeholder="Search Kindle"
                            placeholderTextColor="#636e72"
                            color="#636e72"
                            value={value}
                            onChangeText={(text)=>setValue(text)}
                        />
                    </View>
                    <Image source={bell} style={styles.bell}/>
                </View>


                {/*body*/}
                <View style={{alignItems:'center'}}>
                    <Image source={lib} style={styles.libImage}/>
                    <Text style={styles.text}>It's a little empty here...</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.butext}>SIGN IN</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        )
    }

const styles=StyleSheet.create(
    {
       container1:{
            backgroundColor:'#fff',
            height:60,
            flexDirection:"row",
            justifyContent:'space-around',
            paddingLeft:7,
            borderBottomWidth:0.2,
            borderColor:"#eaeaea"
        },
        header:{
            marginTop:5,
            marginBottom:10,
            paddingLeft:20,
            width:"80%",
            backgroundColor:"#f2f2f2",
            flexDirection:"row",
            
        },
        bell:{
            width:22,
            height:22,
            marginTop:15
        },
     
        libImage:{
            width:250,
            height:180,
            alignSelf:'center',
            marginTop:180
        },
        search:{
            width:27,
            height:27,
            alignItems: 'center',
            marginTop:10
        },
        text:{
            alignSelf:'center',
            marginTop:20,
            marginBottom:25,
            fontFamily: 'sans-serif'
        },
        button:{
            width:'40%',
            backgroundColor:'#000',
            alignItems:'center',
            height:36
        },
        butext:{
            color:'#fff',
            paddingTop:6
        },
    }
);
export default LibraryScreen;