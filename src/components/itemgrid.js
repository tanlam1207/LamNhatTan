import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import  Icon from 'react-native-vector-icons/FontAwesome';
import { addToCart } from '../redux/cartslice';
import { useDispatch } from 'react-redux';

const Itemgrid = ({data}) => {
    const navigation= useNavigation();
    const dispatch = useDispatch();
    const addcart = (product) => {
        // Thêm logic để xử lý việc thêm sản phẩm vào giỏ hàng ở đây
        dispatch(addToCart(product));
        // Ví dụ: có thể lưu vào một state khác để lưu trữ giỏ hàng
        // hoặc gọi một hàm xử lý việc thêm vào giỏ hàng từ component cha
      };
      
  return (
    <ScrollView>
      <View className="pt-10 flex flex-row justify-between items-center px-5">
        <View className=""></View>
        <View className="">
          <Icon name="search" size={24}></Icon>
        </View>
      </View>
      <View className="ml-5">
        <Text className="text-4xl">Giỏ hàng</Text>
      </View>
      {data.map((item, index) => (
      <View key={index} className=" mt-5 pl-5 flex flex-row">
        <View className="basis-1/4">
        <Image source={{ uri: item.image }} style={{ width: 120,height:140, borderRadius: 10 }} />
        </View>
        <View className="pl-10 pt-5" >
<View className="flex flex-row gap-4">
<Text style={{ width: 200, overflow: 'hidden' }} className="text-2xl font-semibold" numberOfLines={1} // Số dòng hiển thị, trong trường hợp này chỉ có 1 dòng
        ellipsizeMode="tail">{item.title} </Text>
</View>
<View style={{ top: 2, flexDirection: 'row', gap: 1 }}>
          <Icon name='star' size={18} color={"gold"} />
          <Icon name='star' size={18} color={"gold"} />
          <Icon name='star' size={18} color={"gold"} />
          <Icon name='star' size={18} color={"gold"} />
          <Icon name='star-o' size={18} color={"grey"} />
          <Text style={{ color: 'grey' }}> (10)</Text>
        </View>
   <View className="relative">
   <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.category}</Text>
          <View style={{ flexDirection: 'row', gap: 1 }}>
            <Text style={{ color: 'grey', fontSize: 16, textDecorationLine: 'line-through', fontWeight: 'bold' }}>15$</Text>
            <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>{item.price}</Text>
          </View>
        <View className="absolute left-36">
        <TouchableOpacity onPress={() => addcart(item)} className=" bg-red-600 rounded-full h-[40] w-[40] flex items-center justify-center" >
        <Icon name='shopping-cart' size={18} color={"white"} />
      </TouchableOpacity>
        </View>
   </View>
          
        </View>
        {/* Đang làm nút tăng giảm qtycls */}
      </View>
      ))}
    </ScrollView>
  )
}

export default Itemgrid