import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const ProductHeader: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={25} color="#000" />
      </TouchableOpacity>

      {/* Cart Icon */}
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require("../assets/icons/cart.png")}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      backgroundColor: "transparent", // ✅ fixed spelling
      elevation: 0, // Android shadow removed
      paddingHorizontal: 20
   },
   icon : {
      height: 24,
      width: 24
   },
})

export default ProductHeader