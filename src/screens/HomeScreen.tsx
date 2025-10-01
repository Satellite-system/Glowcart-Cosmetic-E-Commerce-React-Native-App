 
 
import { View, Text, StyleSheet, ScrollView, FlatList, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign"; 
import CustomDropdown from '../components/CustomDropdown'
import { useNavigation } from '@react-navigation/native';

// Define product type
interface Product {
  id: string;
  name: string;
  price: number;
  title: string;
  description: string;
  thumbnail: string;
  // add more fields as needed
}

// ProductCard component with typed props
type ProductCardProps = {
  products: Product[];
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<ProductCardProps>({products: []})
  const [selectedValue, setSelectedValue] = useState<string>("");

  // function that gets called on change
  const handleSelection = (value: string) => {
    console.log("Selected:", value);
    setSelectedValue(value);

    // 👉 your custom logic here
    if (value === "beauty") {
      Alert.alert("You selected Beauty!");
    }
  };

  const getProductRecords = () =>{
    axios.get("https://dummyjson.com/products").then(res=> {
      console.log("Records Fetched ", res )
      setProducts(res.data);
    }).catch(err => {
      console.error("Error: ", err);
    })
  }
  
  useEffect(() => {
    getProductRecords()
  }, [])

  const navigateToScreen = (item) => {
    navigation.navigate("Product", { Product: item }); 
  };
  
  
  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.bottomContainer}>
        <View style={styles.firstRow}>
          <View style={styles.column}>
            <Text style={styles.bestPrdTxt}>Best Products</Text>
            {products?.products && products?.products.length>0 && <Text style={styles.productCountTxt}>{products?.products.length} products</Text>}
          </View>
            <CustomDropdown />
        </View>
        <ScrollView >

        {/* <Text>{JSON.stringify(products.products)}</Text> */}

        <FlatList
          data={products?.products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            // <TouchableOpacity onPress={() => navigateToScreen(item)}> 
              <ProductCard title={item.title} price={item.price} thumbnail={item.thumbnail} onPress={() => navigateToScreen(item)} /> 
            //{/* </TouchableOpacity> */}
          )}
          numColumns={2} // 👈 makes 2 per row
          columnWrapperStyle={styles.row} // styling for rows
          contentContainerStyle={styles.container}
          style={styles.flatList}
        />

        </ScrollView>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bottomContainer: {
    backgroundColor: "#FFEDE8",
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 25
  },
  firstRow: {
    marginBottom: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    display: 'flex',
    flexDirection: "column",
    gap: 7
  },
  bestPrdTxt: {
    fontFamily: 'Inter-Medium',
    fontSize: 24,
    lineHeight: 21,
    color: "#000000"
  },
  productCountTxt: {
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: "#636363"
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  row: {
    justifyContent: "space-between", // spreads cards evenly
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    color: '#000',
    backgroundColor: "#fff",
    width: 200,
    borderRadius: 8,
    overflow: "hidden",
    padding: 0,
  },
  flatList: {
    
  }
})

export default HomeScreen