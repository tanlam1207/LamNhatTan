import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeStack from './HomeStack';
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CartScreen from '../Screen/cart';

const Tab=createBottomTabNavigator();
const TabRouter = () => {
  return (
    <Tab.Navigator
    initialRouteName={'Home'}
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "gray",
      // tabBarShowLabel: false,
      tabBarItemStyle: {
        padding: 1,
        marginBottom: 12,
      },
      tabBarStyle: {
        padding: 10,
        height: 70,
      },
    }}
  >
    <Tab.Screen
      name={'Home'}
      component={HomeStack}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Icon name="home" size={25} color={focused ? "red" : "gray"} />
          );
        },
      }}
    />
    <Tab.Screen
      name={"Search"}
      component={HomeStack}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Icon name="search" size={25} color={focused ? "red" : "gray"} />
          );
        },
      }}
    />
     <Tab.Screen
      name={"Cart"}
      component={CartScreen}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Icon name="cart" size={25} color={focused ? "red" : "gray"} />
          );
        },
      }}
    />
     <Tab.Screen
      name={"User"}
      component={HomeStack}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <FontAwesome name="user" size={25} color={focused ? "red" : "gray"} />
          );
        },
      }}
    />
  </Tab.Navigator>
  )
}

export default TabRouter