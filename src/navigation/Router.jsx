import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabRouter from './TabRouter';
import Detai_pro from '../Productdetail/Detai_pro';
import LoginScreen from '../login';

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
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Router