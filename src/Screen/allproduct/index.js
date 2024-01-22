import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Itemgrid from '../../components/itemgrid';

const AllProduct = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        const uppercaseCategories = response.data.map(category => category.toUpperCase());
        setCategories(uppercaseCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, []);
  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.toUpperCase() === selectedCategory)
    : products;

  return (
    <View className="flex-1">
        <View>
        <ScrollView horizontal>
        <View className="mt-10 px-5 flex-row h-10">
          {categories.map((item, index) => (
            <TouchableOpacity
            onPress={() => handleCategoryPress(item)}
              className="bg-black p-3 mr-2 rounded-full h-10 text-center justify-center"
              key={index}
            >
              <Text className="text-white">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

        </View>
      <View className="mt-5">
        <Text className="text-2xl font-bold px-5">
          Sản phẩm theo danh mục
        </Text>
        <Itemgrid data={filteredProducts} />
      </View>
    </View>
  );
};

export default AllProduct;
