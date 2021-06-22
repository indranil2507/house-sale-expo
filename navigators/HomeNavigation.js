import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Screens/Home'
import Listings from '../Screens/Listings'

const Stack = createStackNavigator();

const HomeStack=()=>{
    return(
        <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Listings" component={Listings} />
    </Stack.Navigator>

    )
    
}
export default HomeStack