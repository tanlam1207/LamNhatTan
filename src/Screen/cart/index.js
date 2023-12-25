import React from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { ScrollView, View } from 'react-native'
import  Icon from 'react-native-vector-icons/FontAwesome';
import pic1 from '../../../assets/cart1.png'


const CartScreen = () => {
  return (
<ScrollView>
<View className="pt-10 flex flex-row justify-between items-center px-5">
    <View className=""> 
    </View>
    <View className="">
        <Icon name='search' size={24}></Icon>
    </View>
</View>
<View className="ml-5">
    <Text className="text-4xl">
        Giỏ hàng
    </Text>
</View>
<View className=" mt-5 pl-5 flex flex-row">
    <View className="basis-1/4">
    <Image source={pic1} className=""></Image>
    </View>
    <View className="pl-4">
        <Text className="text-2xl font-semibold">
            Pullorve
        </Text>
       <View className="flex flex-row gap-1">
       <Text className="text-gray-400">
            Color:
        </Text>
        <Text className="">
            Black
        </Text>

        <Text className="text-gray-400">
            Size:
        </Text>
        <Text className="">
            L
        </Text>

       </View>
    </View>
    {/* Đang làm nút tăng giảm qtycls */}
    <View className="">
        <TouchableOpacity>
            <Icon name='minus'></Icon>
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon name='plus'></Icon>
        </TouchableOpacity>
    </View>
</View>

</ScrollView>


  )
}

export default CartScreen