import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabRouter from './TabRouter';
import Detai_pro from '../Productdetail/Detai_pro';
import LoginScreen from '../login';
import searchitem from '../Screen/search';
import CartScreen from '../Screen/cart';

const Stack=createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen component={TabRouter} name={'Home'} />
                <Stack.Screen component={Detai_pro} name={'Detail'} />
                <Stack.Screen component={LoginScreen} name={'Login'} />
                <Stack.Screen component={CartScreen} name={'Cart'} />
                {/* <Stack.Screen component={searchitem} name={'Search'} /> */}
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Router