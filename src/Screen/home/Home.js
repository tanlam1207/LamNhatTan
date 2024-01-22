import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import pic1 from '../../../assets/Home1.png'
// import pro1 from '../../assets/pro_1.png'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartslice';
import { useNavigation } from '@react-navigation/native';
import Itemhome from '../../components/itemhome';

// const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation= useNavigation();
  const dispatch = useDispatch();
  const [data,setData]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        // console.log('====================================');
        // console.log(response.data);
        // console.log('====================================');
    };
    fetchData();
  }, []); 
  const addcart = (product) => {
    // Thêm logic để xử lý việc thêm sản phẩm vào giỏ hàng ở đây
    dispatch(addToCart(product));
    // Ví dụ: có thể lưu vào một state khác để lưu trữ giỏ hàng
    // hoặc gọi một hàm xử lý việc thêm vào giỏ hàng từ component cha
  };
  // console.log('====================================');
  // console.log(data);
  // console.log('====================================');
  return (
  <View>
    <ScrollView >
     <View>
     <View className="relative">
      <Image source={pic1} className="w-[100vw]"></Image>
      <View className="absolute bottom-12 ml-5">
        <View>
          <Text className="text-5xl font-black text-white">
            Thời trang
          </Text>
          <Text className="text-5xl font-black text-white">
            Giảm giá
          </Text>
        </View>
        <View className="bg-red-500 h-[50] rounded-full mt-4">
          <Text className="text-white text-center mt-2 text-lg">
            Check
          </Text>
        </View>
      </View>
    </View>
    {/* sale */}
    <View>
    <View className="pt-10 flex flex-row justify-between items-center px-5">
      <View>
        <Text className="text-4xl font-bold">
          Giảm giá
        </Text>
        <Text className="text-xm text-gray-400">
        Siêu giảm giá trong mùa hè
        </Text>
      </View>
      <View>
        <Text className="text-xm text-gray-500">
          Xem tất cả
        </Text>
      </View>
    </View>
    {/* Product_sale */}
    <ScrollView horizontal>
<Itemhome data={data}/>
</ScrollView>
    <View className="pt-1 flex flex-row justify-between items-center px-5">
      <View>
        <Text className="text-4xl font-bold">
          Sản phẩm mới
        </Text>
        <Text className="text-xm text-gray-400">
        In January
        </Text>
      </View>
      <View>
        <Text className="text-xm text-gray-500">
          Xem tất cả
        </Text>
      </View>
    </View>
    <ScrollView horizontal>
<Itemhome data={data}/>
</ScrollView>


    </View>
   </View>
  </ScrollView>
    
     
       
  {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator> */}
  </View>
  )
}

export default Home