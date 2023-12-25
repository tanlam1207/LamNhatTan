import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import pic1 from '../../assets/Home1.png'
import pro1 from '../../assets/pro_1.png'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartslice';
import { useNavigation } from '@react-navigation/native';

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
            Fashion
          </Text>
          <Text className="text-5xl font-black text-white">
            Sale
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
          Sale
        </Text>
        <Text className="text-xm text-gray-400">
        Super summer sale
        </Text>
      </View>
      <View>
        <Text className="text-xm text-gray-500">
          View All
        </Text>
      </View>
    </View>
    {/* Product_sale */}
    <ScrollView horizontal>
  <View style={{ flexDirection: 'row', marginBottom: 80 }}>
    {data.map((item, index) => (
      <TouchableOpacity
      key={index}
      onPress={() => navigation.navigate('Detail', { product: item })}
    >
      <View key={index} style={{ paddingLeft: 15, paddingTop: 7, position: 'relative' }}>
        <View>
          <Image source={{ uri: item.image }} style={{ width: 150,height:185, borderRadius: 10 }} />
          <Text style={{ position: 'absolute', top: 1, backgroundColor: 'red', borderRadius: 20, color: 'white', width: 40, textAlign: 'center', left: 1 }}>
            - 20%
          </Text>
        </View>
        <View style={{ top: 2, flexDirection: 'row', gap: 1 }}>
          <Icon name='star' size={18} color={"gold"} />
          <Icon name='star' size={18} color={"gold"} />
          <Icon name='star' size={18} color={"gold"} />
          <Icon name='star' size={18} color={"gold"} />
          <Icon name='star-o' size={18} color={"grey"} />
          <Text style={{ color: 'grey' }}> (10)</Text>
        </View>
        <View style={{ my: 3 }}>
        <View style={{ width: 150, overflow: 'hidden' }}>
      <Text 
        style={{ color: 'grey', fontSize: 14 }}
        numberOfLines={1} // Số dòng hiển thị, trong trường hợp này chỉ có 1 dòng
        ellipsizeMode="tail" // Đặt chế độ cắt và hiển thị dấu ba chấm ở cuối
      >
        {item.title}
      </Text>
    </View>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.category}</Text>
          <View style={{ flexDirection: 'row', gap: 1 }}>
            <Text style={{ color: 'grey', fontSize: 16, textDecorationLine: 'line-through', fontWeight: 'bold' }}>15$</Text>
            <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>{item.price}</Text>
          </View>
          <TouchableOpacity onPress={() => addcart(item)}className="items-center bg-red-600 rounded-full h-[30] mt-2" >
        <Text className="text-center mt-1 text-white">Add To Cart</Text>
      </TouchableOpacity>
        </View>
      </View>
      
      </TouchableOpacity>
    ))}
  </View>
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