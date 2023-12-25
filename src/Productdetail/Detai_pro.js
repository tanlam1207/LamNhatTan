import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import pic1 from '../../assets/pro1-de.png'
import pic2 from '../../assets/pro2-de.png'
import  Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Detai_pro = ({route}) => {
  
  const { product } = route.params;
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
<SafeAreaView style={styles.container}> 
     <TouchableOpacity onPress={goBack} style={styles.backButton}>
       {/* <Image  className="pr-3" source={product_image} /> */}
       </TouchableOpacity>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{`${product.price}$`}</Text>
        {/* Add more details here based on your product structure */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"#fff"
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  detailsContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
  },
  // Add styles for additional details if needed
});

export default Detai_pro