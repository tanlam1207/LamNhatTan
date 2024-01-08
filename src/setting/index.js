import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SettingScreen = () => {
    const navigation= useNavigation();
  return (
<View className="mt-10 px-5">
    <Text className="text-center text-3xl">
        SettingScreen
    </Text>
    <View className="items-center">
        <TouchableOpacity className="mt-24 bg-cyan-600 w-[180] items-center rounded-full" onPress={() => navigation.navigate('Login')}>
            <Text className="text-3xl text-white">
                Login
            </Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default SettingScreen