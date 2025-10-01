import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

type ProductCardProps = {
  title: string;
  price: number;
  thumbnail: string;
  onPress?: () => void; // optional (in case you don’t always pass it)
};

const ProductCard: React.FC<ProductCardProps> = ({title, price, thumbnail, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      <Text style={styles.title}>{title.length>17?title.substr(0,17):title}</Text>
      <View style={styles.row}>
         <Text style={styles.price}>${price}</Text>
         <Image source={require("../assets/icons/heart.png")} style={styles.heart} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({ 
   container: {
      backgroundColor: "#fff",
      borderRadius: 12,
      width: "48%",
      padding: 14
   },
   thumbnail: {
      width: "100%",
      // height: 'auto',
      aspectRatio: 1, 
      resizeMode: "contain",
      borderRadius: 8,
      backgroundColor: "#eec5d3"
   },
   title: {
      fontFamily: 'Inter',
      fontSize: 16,
      // lineHeight: 21,
      color: '#000000',
      marginTop: 8
   },
   price: {
      fontFamily: 'Inter',
      fontSize: 16,
      // lineHeight: 21,
      color: '#4B4B4B',
      backgroundColor: "#fff",
      marginVertical: "auto"
   },
   row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between",
      marginTop: 5
   },
   heart: {
      width: 32,
      height: 28
   }
})
export default ProductCard