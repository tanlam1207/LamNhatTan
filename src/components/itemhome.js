import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import  Icon from 'react-native-vector-icons/FontAwesome';
import { addToCart } from '../redux/cartslice';
import { useDispatch } from 'react-redux';

const Itemhome = ({data}) => {
    const navigation= useNavigation();
    const dispatch = useDispatch();
    const addcart = (product) => {
        // Thêm logic để xử lý việc thêm sản phẩm vào giỏ hàng ở đây
        dispatch(addToCart(product));
        // Ví dụ: có thể lưu vào một state khác để lưu trữ giỏ hàng
        // hoặc gọi một hàm xử lý việc thêm vào giỏ hàng từ component cha
      };
      
  return (
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
        <Text className="text-center mt-1 text-white">Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
        </View>
      </View>
      
      </TouchableOpacity>
    ))}
  </View>
  )
}

export default Itemhome