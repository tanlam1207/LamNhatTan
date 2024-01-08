import React from "react";
import { Image, TouchableOpacity,TextInput } from "react-native";
import { Text } from "react-native";
import { ScrollView, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import pic1 from "../../../assets/cart1.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../redux/cartslice";

const CartScreen = () => {
  const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    const delCart = (productId) => {
      dispatch(deleteCart({ id: productId }));
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
      {cartItems?.map((item, index) => (
      <View key={index} className=" mt-5 pl-5 flex flex-row">
        <View className="basis-1/4">
        <Image source={{ uri: item.image }} style={{ width: 120,height:140, borderRadius: 10 }} />
        </View>
        <View className="pl-10 pt-5" >
<View className="flex flex-row gap-4">
<Text style={{ width: 150, overflow: 'hidden' }} className="text-2xl font-semibold" numberOfLines={1} // Số dòng hiển thị, trong trường hợp này chỉ có 1 dòng
        ellipsizeMode="tail">{item.title} </Text>
        <TouchableOpacity onPress={() => delCart(item.id)}
         className="bg-red-500 w-6 h-6 items-center justify-center top-3 left-3">
        <Icon size={21} color={"white"} name="close"></Icon>
        </TouchableOpacity>
</View>
          <View className="flex flex-row gap-1">
            <Text className="text-gray-400">Color:</Text>
            <Text className="">Black</Text>

            <Text className="text-gray-400">Size:</Text>
            <Text className="">L</Text>
          </View>
          <View className="flex-row">
          <View className="mt-3 flex-row items-center">
            <TouchableOpacity className="w-9 h-9 justify-center items-center rounded-full bg-slate-200" >
              <Icon name="minus"></Icon>
            </TouchableOpacity>
            <TextInput defaultValue="1" className="w-10 text-center"/>
            <TouchableOpacity className="w-9 h-9 justify-center items-center rounded-full bg-slate-200">
              <Icon name="plus"></Icon>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="mt-4 ml-6 font-bold text-xl">
            {item.price}$
            </Text>
          </View>
          </View>
        </View>
        {/* Đang làm nút tăng giảm qtycls */}
      </View>
      ))}
    </ScrollView>
  );
};

export default CartScreen;
