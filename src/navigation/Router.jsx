import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabRouter from './TabRouter';

const Stack=createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen component={TabRouter} name={'Home'} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Router