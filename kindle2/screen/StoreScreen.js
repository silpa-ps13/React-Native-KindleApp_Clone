import React from 'react'
import { Text, View,StyleSheet,Image,ScrollView,TouchableOpacity,TouchableHighlight} from 'react-native'
import {Icon} from 'react-native-elements'
import {SliderBox} from 'react-native-image-slider-box';
var bell=require('../img/icons/Bell-icon.png')
const image = [
     require('../img/Store/banner/ban1.png'),
     require('../img/Store/banner/ban2.png'),
     require('../img/Store/banner/ban3.png'),
];
const StoreScreen=()=>{ 
    return(
        <View>
            {/*header*/}
            <View style={styles.container1}>
                <Text style={styles.storetext}>KINDLE STORE</Text>
                    <TouchableOpacity>
                    <Image source={bell} style={styles.bell}/>
                    </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} >
                {/*Kindle Store*/}

                <View style={{height:45,borderBottomWidth:0.2,borderColor:"#eaeaea",paddingLeft:20,paddingTop:10,flexDirection:'row'}}>
                    <Icon name='arrow-back-ios' size={12} style={{paddingTop:5}} />
                    <Text style={{fontWeight:'bold'}}>Kindle Store</Text>
                </View>
                {/*Icons horizontal slider and banner*/}

                <View style={{backgroundColor:'#fff',height:280,marginBottom:6,borderBottomWidth:0.2,borderColor:"#eaeaea"}}>
                    <ScrollView horizontal={true}> 
                        <View style={{alignItems:'center',padding:20}}>
                            <Image  source={require('../img/Store/Img1/app.png')} style={{width:50,height:50}}/>
                            <Text>Kindle Apps</Text>
                        </View>
                        <View style={{alignItems:'center',padding:20,paddingTop:36}}>
                            <Image  source={require('../img/Store/Img1/bad.png')} style={{width:30,height:30}}/>
                            <Text style={{paddingTop:4}}>Bestsellers</Text>
                        </View>
                        <View style={{alignItems:'center',padding:20,paddingTop:34}}>
                            <Image  source={require('../img/Store/Img1/e.png')} style={{width:30,height:30}}/>
                            <Text style={{paddingTop:6}}>eBook Deals</Text>
                        </View>
                        <View style={{alignItems:'center',padding:20,paddingTop:30}}>
                            <Image  source={require('../img/Store/Img1/logo.png')} style={{width:40,height:30}}/>
                            <Text style={{paddingTop:9}}>Sign up</Text>
                        </View>
                        <View style={{alignItems:'center',padding:20,paddingTop:34}}>
                            <Image  source={require('../img/Store/Img1/prime.png')} style={{width:40,height:25}}/>
                            <Text style={{paddingTop:12}}>Prime Reading</Text>
                        </View>
                        <View style={{alignItems:'center',padding:20,paddingTop:35}}>
                            <Image  source={require('../img/Store/Img1/lang.png')} style={{width:23,height:23}}/>
                            <Text style={{paddingTop:12}}>Languages</Text>
                        </View>
                        <View style={{alignItems:'center',padding:20}}>
                            <Image  source={require('../img/Store/Img1/ebook.jpg')} style={{width:50,height:50}}/>
                            <Text>eTextbooks</Text>
                        </View>
                    </ScrollView>
                    <SliderBox images={image}   sliderBoxHeight={150}  dotColor="#fff" inactiveDotColor="#90A4AE" autoplay/>
                </View>
                {/*featured Store*/}

                <View style={{backgroundColor:'#fff',height:390,marginBottom:6,paddingBottom:10,borderTopWidth:0.2,borderColor:"#eaeaea",borderBottomWidth:0.2,padding:20}}>
                    <Text style={{paddingTop:20,fontSize:20,fontWeight:'bold',paddingBottom:10}}>Featured stores</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{alignItems:'center'}}>
                                <Image source={require('../img/Store/featuredstore/f1.png')} style={{width:110,height:110,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Featured Articles</Text>
                            </View >
                            <View style={{alignItems:'center',paddingLeft:12}}>
                                <Image source={require('../img/Store/featuredstore/f2.png')} style={{width:110,height:110,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Gift an eBook</Text>
                            </View>
                            <View style={{alignItems:'center',paddingLeft:12}}>
                                <Image source={require('../img/Store/featuredstore/f3.png')} style={{width:110,height:110,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Children's eBooks</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',paddingTop:20}}>
                            <View style={{alignItems:'center'}}>
                                <Image source={require('../img/Store/featuredstore/f4.png')} style={{width:110,height:110,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Editor's corner</Text>
                             </View >
                            <View style={{alignItems:'center',paddingLeft:12}}>
                                <Image source={require('../img/Store/featuredstore/f5.png')} style={{width:110,height:110,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Exam prep eBooks</Text>
                            </View>
                            <View style={{alignItems:'center',paddingLeft:12}}>
                                <Image source={require('../img/Store/featuredstore/f6.png')} style={{width:110,height:110,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>eTextbooks</Text>
                            </View>
                        </View>
                </View>
               
                <View >
                     {/*Below feature Store gallery*/}
                    <View style={{backgroundColor:'#fff',height:360}}>
                        <View style={{flexDirection:'row',paddingLeft:20}}>
                            <View style={{alignItems:'center'}}>
                                <Image source={require('../img/Store/underfeature/g1.png')} style={{width:170,height:110,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:11}}>Get the FREE Kindle App</Text>
                                <Text style={{fontSize:8,color:'#2c3e50',paddingTop:4}}>Read anytime, anywhere</Text>
                            </View>
                            <View style={{alignItems:'center',marginLeft:20}}>
                                <Image source={require('../img/Store/underfeature/g2.png')} style={{width:170,height:110,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:11}}>Kindle eBooks starting $29</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',paddingTop:20}}>
                            <View style={{alignItems:'center'}}>
                                 <Image source={require('../img/Store/underfeature/g3.png')} style={{width:170,height:110,marginBottom:5}}/>
                                 <Text style={{fontWeight:'bold',fontSize:11}}>Try Kindle Unlimited now</Text>
                            </View>
                            <View style={{alignItems:'center',marginLeft:20}}>
                                <Image source={require('../img/Store/underfeature/g4.png')} style={{width:170,height:110,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:11}}>Bestsellers</Text>
                            </View>
                        </View>
                    </View>

                    {/*under prize */}
                    <View style={{backgroundColor:'#fff',height:180}}>
                        <View style={{flexDirection:'row',paddingLeft:20}}>
                            <TouchableOpacity style={{width:'40%',backgroundColor:'#4b9fe5',alignItems:'center',height:60,width:170}}>
                                <Text style={{color:'#fff',paddingTop:20,fontWeight:'bold',fontSize:16}}>Under $9</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:'40%',backgroundColor:'#4b9fe5',alignItems:'center',height:60,width:170,marginLeft:20}}>
                                <Text style={{color:'#fff',paddingTop:20,fontWeight:'bold',fontSize:16}}>Under $29</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop:20,flexDirection:'row',paddingLeft:20}}>
                            <TouchableOpacity style={{width:'40%',backgroundColor:'#4b9fe5',alignItems:'center',height:60,width:170}}>
                                <Text style={{color:'#fff',paddingTop:20,fontWeight:'bold',fontSize:16}}>Under $49</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:'40%',backgroundColor:'#4b9fe5',alignItems:'center',height:60,width:170,marginLeft:20}}>
                                <Text style={{color:'#fff',paddingTop:20,fontWeight:'bold',fontSize:16}}>Under $99</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    {/*popular genres*/}
                    <View style={{backgroundColor:'#fff',height:400,paddingBottom:10,}}>
                        <View style={styles.horizontalLine} />
                        <Text style={{fontSize:20,paddingBottom:20,paddingLeft:20,paddingRight:15}}>Popular Genres</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{alignItems:'center',paddingLeft:20,paddingRight:15}}>
                                <Image source={require('../img/Store/pop/h1.png')} style={{width:70,height:70,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Literature and Fiction</Text>
                            </View>
                            <View style={{alignItems:'center',paddingLeft:15}}>
                                <Image source={require('../img/Store/pop/h2.png')} style={{width:70,height:70,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Romance</Text>
                            </View>
                            <View style={{alignItems:'center',paddingLeft:20}}>
                                <Image source={require('../img/Store/pop/h3.png')} style={{width:70,height:70,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Crime and Thrillers</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',paddingTop:30,paddingLeft:20,paddingRight:15}}>
                            <View style={{alignItems:'center'}}>
                                <Image source={require('../img/Store/pop/h4.png')} style={{width:70,height:70,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Personal Development</Text>
                            </View >
                            <View style={{alignItems:'center',paddingLeft:20}}>
                                <Image source={require('../img/Store/pop/h5.png')} style={{width:70,height:70,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Business</Text>
                            </View>
                            <View style={{alignItems:'center',paddingLeft:45}}>
                                <Image source={require('../img/Store/pop/h6.png')} style={{width:70,height:70,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Biographies</Text>
                            </View>
                        </View>
                    <View style={styles.horizontalLine} />
                    <View style={styles.horizontalLine} />
                    </View>

                    {/*Explore by language*/}
                    <View style={{backgroundColor:'#fff',height:380,paddingBottom:10,}}>

                        <Text style={{fontSize:20,paddingBottom:20,paddingLeft:20,paddingRight:15}}>Explore by language</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{alignItems:'center',paddingLeft:40}}>
                                <Image source={require('../img/Store/lan/e1.png')} style={{width:70,height:70,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Hindi</Text>
                            </View >
                            <View style={{alignItems:'center',paddingLeft:50}}>
                                <Image source={require('../img/Store/lan/e2.png')} style={{width:70,height:70,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Tamil</Text>
                            </View>
                            <View style={{alignItems:'center',paddingLeft:50}}>
                                <Image source={require('../img/Store/lan/e3.png')} style={{width:70,height:70,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Marathi</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',paddingTop:30,paddingLeft:23}}>
                            <View style={{alignItems:'center',paddingLeft:20}}>
                                <Image source={require('../img/Store/lan/e4.png')} style={{width:70,height:70,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Malayalam</Text>
                            </View >
                            <View style={{alignItems:'center',paddingLeft:50,paddingBottom:20}}>
                                <Image source={require('../img/Store/lan/e5.png')} style={{width:70,height:70,marginBottom:5}}/>
                                <Text style={{fontWeight:'bold',fontSize:12}}>Gujarati</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalLine} />
                    </View>

                    {/*Popular series*/}
                    <View style={{backgroundColor:'#fff',height:220,paddingBottom:20,}}>
                        <Text style={{fontSize:20,fontWeight:'bold',paddingBottom:20,paddingLeft:20,paddingRight:15}}>Popular Series</Text>
                        <View style={{flexDirection:'row',paddingLeft:20,paddingRight:15}}>
                            <View style={{alignItems:'center'}}>
                                <Image source={require('../img/Store/series/o1.png')} style={{width:160,height:50,marginBottom:5}}/>
                            </View>
                            <View style={{alignItems:'center',paddingLeft:30}}>
                                <Image source={require('../img/Store/series/o2.png')} style={{width:160,height:50,marginBottom:5}}/>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',paddingTop:30,paddingLeft:20,paddingRight:15}}>
                            <View style={{alignItems:'center'}}>
                                <Image source={require('../img/Store/series/o3.png')} style={{width:160,height:50,marginBottom:5}}/>
                            </View >
                            <View style={{alignItems:'center',paddingLeft:30,paddingBottom:20}}>
                                <Image source={require('../img/Store/series/o4.png')} style={{width:160,height:50,marginBottom:5}}/>
                            </View>
                        </View>
                    </View>

                    {/*bestsellers*/}
                    <View style={{backgroundColor:'#fff',height:450,paddingBottom:20,}}>
                        <TouchableOpacity>
                            <View style={{marginBottom:10,paddingLeft:20,paddingRight:15}}>
                                <Text style={{fontWeight:'bold'}}>Bestsellers in Literature & Fiction                                <Text style={{fontSize:20,fontWeight:'normal'}}>></Text></Text>   
                            </View>
                        </TouchableOpacity>
                        <ScrollView horizontal={true}>
                            <View style={{width:90,height:150}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b1.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Immortals of Meluha(Th...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Amish Tripathi</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>156</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(9,698)</Text>
                            </View>  
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b2.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>The Book of Rumi: 105...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Rumi</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>99</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(592)</Text>
                            </View>  
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b3.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>The Perfect Murder</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Ruskin Bond</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>131</Text>10</Text>
                                <Image source={require('../img/Store/bestsellers/star2.png')} style={{width:80,height:15}}/>
                                <Text>(480)</Text>
                            </View> 
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b4.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Wicked Lies: An Indian B...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>M.V. Kasi</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>99</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(25)</Text>
                            </View>  
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b5.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Back To You :Enemies to...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Madhuri Tamse</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>159</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(30))</Text>
                            </View>
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b6.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Bound By The Pregnancy...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Dee James</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>99</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(9)</Text>
                            </View>  
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b7.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>My Ruin: An Indian Billi...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Sapna BhogArthur</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>99</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(71)</Text>
                            </View> 
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b8.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>The Ultimate Brain-Boos...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Shireen Stephen</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>164</Text>35</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(263)</Text>
                            </View>  
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b9.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Against All Odds: An In...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>P.G. Van</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>99</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(27)</Text>
                            </View>
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b12.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>THE DIARY OF A YOUN...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Anne Frank</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(177)</Text>
                            </View>  
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b13.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>The Adventures...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Arthur Conan Doyle</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>129</Text>15</Text>
                                <Image source={require('../img/Store/bestsellers/star2.png')} style={{width:80,height:15}}/>
                                <Text>(737)</Text>
                            </View> 
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b10.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Seduced by Mr.Perfect:...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Dee James</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>99</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star2.png')} style={{width:80,height:15}}/>
                                <Text>(20)</Text>
                            </View>  
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b11.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>The Devil's Desire: Con...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>M.V> Kasi</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>99</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(62)</Text>
                            </View>
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b14.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Akbar and Birbal (Illus...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Compiled by Maple Press</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>75</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(252)</Text>
                            </View>  
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b15.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Immortals of Meluha(Th...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Amish Tripathi</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>156</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(9,698)</Text>
                            </View> 
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b16.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Immortals of Meluha(Th...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Amish Tripathi</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>156</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(9,698)</Text>
                            </View>  
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b17.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Immortals of Meluha(Th...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Amish Tripathi</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>156</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(9,698)</Text>
                            </View>
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b18.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Immortals of Meluha(Th...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Amish Tripathi</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>156</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(9,698)</Text>
                            </View>
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b19.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>Immortals of Meluha(Th...</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>Amish Tripathi</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>156</Text>00</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(9,698)</Text>
                            </View>
                            <View style={{width:90,height:150,marginLeft:20}}>
                                <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:80,height:10,marginBottom:5}}/>
                                <Image source={require('../img/Store/bestsellers/b20.jpg')} style={styles.imga1}/>
                                <Text style={{paddingTop:20}}>1984</Text>
                                <Text style={{paddingTop:5,fontSize:15,color:'#727374',paddingBottom:3}}>George Orwell</Text>
                                <Text style={{fontSize:12,color:'#727374'}}>Kindle Edition</Text>
                                <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                <Text>(51,594)</Text>
                            </View>
                        </ScrollView>
                    </View>

                    {/*Bestseller Result*/}
                    <View style={{backgroundColor:'#fff',height:3200,paddingBottom:20,paddingLeft:20}}>
                        <View style={{borderWidth:0.2,borderColor:'#ccc',borderRadius:5,width:'95%',height:40,marginBottom:5}}>
                            <Text style={{padding:6}}>Over 60,000 Results in Kindl...                           <Text style={{fontSize:12,fontWeight:'bold',color:'#1f7a7a'}}>Filter >></Text></Text>
                        </View>
                    
                            <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/a1.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View> 
                        
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/b1.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View> 
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/a2.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View> 
                        
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/a3.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View>
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/a4.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View> 
                        
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/a5.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View> 
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/a6.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View> 
                        
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/b2.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View> 
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/a7.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View> 
                        
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/w1.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View> 
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/w2.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View> 
                        
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Image source={require('../img/Store/bestsellers/bs.png')} style={{width:95,height:25,marginTop:10}}/>
                                    <Image source={require('../img/Store/bestsellers/ku.png')} style={{marginLeft:3,width:122,height:16,marginBottom:5,marginTop:5}}/>
                                    <Image source={require('../img/Store/bestsellers/b3.jpg')} style={{width:122,height:180}}/>
                                </View>
                                <View style={{marginLeft:15,paddingTop:40,width:220}}>
                                    <Text style={{fontWeight:'600'}}>The Art of Saying NO: How To Stand Your Ground, Reclaim Your Time And Energy,...</Text>
                                    <Text style={{fontSize:13,color:'#727374',paddingBottom:5}}>by Damon Zahariades</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../img/Store/bestsellers/star.png')} style={{width:80,height:15}}/>
                                        <Text style={{fontSize:11,color:'#727374'}}>2,247</Text>
                                    </View>
                                    <Text style={{fontSize:12,}}>$<Text style={{fontSize:20}}>51</Text>45</Text>
                                </View>
                               
                            </View>
                            <View style={{ alignSelf: 'stretch',borderBottomWidth: 1, borderBottomColor: '#eee',paddingTop:20,marginRight:20}} />
                        </View>
 
                    </View>
                {/*list of books*/}

                    <View style={{backgroundColor:'#fff',height:1750,paddingBottom:20,paddingLeft:20,paddingRight:20}}>
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity>
                                <View style={{borderWidth:0.2,borderColor:'#ccc',borderRadius:5,width:'30%',height:40,marginBottom:5}}>
                                    <Text style={{padding:6}}>See all results</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                            <View style={{borderWidth:0.2,borderColor:'#ccc',borderRadius:5}}>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Literature and Fiction                                            <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Health, Family & Personal Development           <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Romance                                                                 <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                         <Text>Business & Economics                                         <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                     <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Social Sciences                                                      <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Children & Young Adults                                      <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                         <Text>Crime, Thriller & Mystery                                      <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Religion & Spirituality                                            <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Fantasy, Horror & Science Fiction                      <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Biographies, Diaries & True Accounts               <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                     <View style={styles.horizontalLine1} />  
                                </TouchableOpacity>
                                <TouchableOpacity>   
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Exam Preparation                                                  <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Textbooks                                                               <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Sciences, Technology & Medicine                     <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Historical Fiction                                                   <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Computing, Internet & Digital Media                 <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Politics                                                                    <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Crafts, Home & Lifestyle                                      <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Language, Linguistics & Writing                         <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Action & Adventure                                               <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Arts, Film & Photography                                     <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Comics & Mangas                                                 <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Humour                                                                   <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Travel & Tourism                                                   <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Reference                                                               <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Sports & Outdoors                                                <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>School Books                                                        <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Foreign Language eBooks                                 <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>History                                                                    <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Law                                                                         <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                    <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row',padding:12,marginLeft:10}}>
                                        <Text>Calendars                                                              <Text style={{fontSize:20}}>></Text></Text>
                                    </View>
                                <View style={styles.horizontalLine1} />
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </ScrollView>
        </View>
    )

}
const styles=StyleSheet.create(
    {
       container1:{
        backgroundColor:'#fff',
        height:60,
        flexDirection:"row",
        paddingLeft:20,borderBottomWidth:0.2,
        borderColor:"#eaeaea"
        },
        storetext:{
        paddingTop:20,
        marginRight:'50%'
        },
        
        bell:{
        width:22,
        height:22,
        marginTop:17,
        marginLeft:40
        },
        horizontalLine:{
        alignSelf: 'stretch',
        borderWidth:3.5,
        borderColor:"#F0F3F3",
        marginBottom:20,
        marginTop:20,
        marginLeft:20,
        marginRight:20
        
        },
        horizontalLine1:{
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
            
        },
        imga1:{
        width:90,
        height:150,
           
        },
    });
export default StoreScreen;