import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './../Screen/home/Home';

// import De from '../Productdetail/index';
const Stack=createNativeStackNavigator();
const HomeStack = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name={'Home'} component={Home}/>
   </Stack.Navigator>
  )
}

export default HomeStack