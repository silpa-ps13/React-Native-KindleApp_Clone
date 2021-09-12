import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './screen/MainStack';
const App =()=>{
  return(
    <NavigationContainer>
<MainStack/>
    </NavigationContainer>
  )
}
export default App;