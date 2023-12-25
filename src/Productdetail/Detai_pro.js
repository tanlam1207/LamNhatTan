import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import pic1 from '../../assets/pro1-de.png'
import pic2 from '../../assets/pro2-de.png'
import  Icon from 'react-native-vector-icons/FontAwesome';
const Detai_pro = () => {
    const [data,setData]=useState([]);
    useEffect(() => {
      const fetchData = async () => {
          const response = await axios.get('https://fakestoreapi.com/products/1');
          setData(response.data);
          // console.log('====================================');
          // console.log(response.data);
          // console.log('====================================');
      };
      fetchData();
    }, []); 
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  return (
<ScrollView>
<View>
    <ScrollView horizontal className="pt-10">
     <Image source={pic1} className=""></Image>
     <Image source={pic1} className=""></Image>
    </ScrollView>
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
        {data.title}
      </Text>
    </View>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{data.category}</Text>
          <View style={{ flexDirection: 'row', gap: 1 }}>
            <Text style={{ color: 'grey', fontSize: 16, textDecorationLine: 'line-through', fontWeight: 'bold' }}>15$</Text>
            <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>{data.price}</Text>
          </View>
        </View>
   </View>
</ScrollView>
  )
}

export default Detai_pro