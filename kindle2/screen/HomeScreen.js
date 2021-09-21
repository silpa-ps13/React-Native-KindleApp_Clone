import React,{useState}from 'react'
import { View, Text,ScrollView,Image,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import Header  from '../components/header'

const HomeScreen = () => {

    return (
        <View>

        <Header></Header>
        {/*Main Scroller*/}

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingBottom:70}}>
               
               {/*Welcome*/}

                <View style={styles.container2}>
                    <Text style={styles.welcomeText}>Welcome to Kindle!</Text>
                    <Text style={styles.WelText}>Find your next great read by browsing top picks and recommendations below, or shop the store.</Text>
                </View> 

                {/*Top page*/}

                <View style={styles.container3}>
                    <Text>TOP PAGE TURNERS</Text>
                    <Text style={styles.italicText}>Other readers finished these best selling books quickly</Text>
                    <View style={styles.horizontalLine} />
                        <ScrollView horizontal={true}>
                            <Image source={require('../img/Home/imgban1/b1.jpg')} style={styles.imga1}/>
                            <Image source={require('../img/Home/imgban1/b2.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b3.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b4.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b5.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b6.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b7.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b8.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b9.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b10.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b11.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b12.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b13.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b14.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b15.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b16.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b17.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b18.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b19.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban1/b20.jpg')} style={styles.imga}/>
                        </ScrollView>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity>
                            <Text style={{color:'#1a7abf'}}>SEE ALL                                                                               ></Text></TouchableOpacity>
                </View>

                {/*New Release*/}
           
                <View style={styles.container3}>
                    <Text>NEW RELEASES IN KINDLE STORE</Text>
                    <View style={styles.horizontalLine} />
                        <ScrollView horizontal={true}>
                            <Image source={require('../img/Home/imgban2/a1.jpg')} style={styles.imga1}/>
                            <Image source={require('../img/Home/imgban2/a2.png')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a3.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a4.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a5.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a6.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a7.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a8.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a9.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a10.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a11.png')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a12.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a13.png')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a14.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a15.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a16.png')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a17.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a18.png')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a19.jpg')} style={styles.imga}/>
                            <Image source={require('../img/Home/imgban2/a20.jpg')} style={styles.imga}/>
                        </ScrollView>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity>
                            <Text style={{color:'#1a7abf'}}>SEE ALL                                                                               ></Text></TouchableOpacity>
                    </View>

                {/*Most wished*/}

                <View style={styles.container3}>
                    <Text>MOST WISHED FOR KINDLE BOOKS</Text>
                    <View style={styles.horizontalLine} />
                    <ScrollView horizontal={true}>
                        <Image source={require('../img/Home/imgban3/c1.jpg')} style={styles.imga1}/>
                        <Image source={require('../img/Home/imgban3/c2.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c3.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c4.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c5.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c6.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c7.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c8.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c9.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c10.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c11.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c12.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c13.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c14.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c15.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c16.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c17.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c18.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c19.jpg')} style={styles.imga}/>
                        <Image source={require('../img/Home/imgban3/c20.jpg')} style={styles.imga}/>
                    </ScrollView>
                    <View style={styles.horizontalLine} />
                    <TouchableOpacity>
                        <Text style={{color:'#1a7abf'}}>SEE ALL                                                                               ></Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView></View>
    )
}
const styles=StyleSheet.create({

    container2:{
        backgroundColor:"#fff",
        height:110,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        padding:20
    },
    welcomeText:{
        fontSize:16,
        marginBottom:10,
        fontWeight:'500'
    },
    WelText:{
        textAlign:'center',
        fontSize:13
    },
    container3:{
        backgroundColor:"#fff",
        height:290,
        marginTop:10,
        alignItems:'flex-start',
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:10
    },
    italicText:{
        color:"#888888",
        fontStyle:'italic',
        fontSize:12
    },
    horizontalLine:{
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 10,
        marginBottom: 10
    },
    imga1:{
        width:100,
        height:170,
        padding:10
    },
    imga:{
        width:100,
        height:170,
        padding:10,
        marginLeft:10
    },
    
});
export default HomeScreen;
