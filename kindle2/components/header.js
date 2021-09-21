import React from 'react'
import { 
    View, 
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
 } from 'react-native'
var search=require('../img/icons/search.png')
var bell=require('../img/icons/Bell-icon.png')
const header = () => {
    return (
        <View style={styles.container1}>
        <View style={styles.header}>
            <Image source={search} style={{width:27,height:27,alignItems: 'center',marginTop:10}}/>
            <TextInput 
                style={{flex:1}}
                placeholder="Search Kindle"
                placeholderTextColor="#636e72"
                color="#636e72"
            />
        </View>
        <TouchableOpacity>
            <Image source={bell} style={styles.bell}/>
        </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    container1:{
        backgroundColor:"#fff",
        height:60,
        paddingTop:6,
        flexDirection:"row",
        justifyContent:'space-around',
        paddingLeft:7,
        borderBottomWidth:0.2,
        borderColor:"#ccc"
    
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
})
export default header;
