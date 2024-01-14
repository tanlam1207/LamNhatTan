import React, { useState, useEffect } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
// import Itemhome from '../../components/itemhome';
import Itemgrid from '../../components/itemgrid';

const Searchitem = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    };

    fetchData();
  }, []);

  const updateSearch = (search) => {
    setSearch(search);
    const filtered = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <View style={{ margin: 3, marginTop: 40 }}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <Itemgrid
        data={filteredData.length > 0 ? filteredData : data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Searchitem;
