import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './../Screen/home/Home';
import PaymentScreen from '../Payment/PaymentScreen';

// import De from '../Productdetail/index';
const Stack=createNativeStackNavigator();
const HomeStack = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name={'Home'} component={Home}/>
    <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
   </Stack.Navigator>
  )
}

export default HomeStack