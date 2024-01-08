import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setisLogin } from '../redux/userslice';

const LoginScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [data, setData] = React.useState({
      username: "",
      password: "",
    });
    const [user, setUser] = React.useState({
      username: "tan1207",
      password: "123456",
    });
    const handlePressLogin = () => {
      // Thực hiện xác thực và đăng nhập ở đây
      if (data.username === user.username) {
        if (data.password === user.password) {
            alert("Login Success")
          dispatch(setisLogin(true));
          navigation.navigate('HomeStack');
        } else {
          alert("password not correct")
        }
      } else {
        alert("username not correct")
      }
    };
  return (
<View className="mt-10">
    <Text className="text-3xl font-extrabold text-center">
        Login
    </Text>
    <View>
        <TextInput
                  onChangeText={(text) => setData({ ...data, username: text })}
                  value={data.username}
        className="rounded-full w-full bg-slate-300 mt-5 p-2" placeholder='Email'>
        </TextInput>
        <TextInput
           value={data.password}
           onChangeText={(text) => setData({ ...data, password: text })}
        className="rounded-full w-full bg-slate-300 mt-5 p-2" placeholder='Pasword'>
        </TextInput>
        <View className="items-center mt-4">
        <TouchableOpacity 
           onPress={handlePressLogin}
        className="bg-blue-500 w-[100] rounded-full p-2 items-center">
            <Text className="text-white text-xxl font-bold">
                Login
            </Text>
        </TouchableOpacity>
        </View>
    </View>
</View>
  )
}

export default LoginScreen