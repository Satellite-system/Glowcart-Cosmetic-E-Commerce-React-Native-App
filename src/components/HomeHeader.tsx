/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
// import ActiveBell from '../assets/icons/activeBell.png'

const HomeHeader = () => {
   const [text, setText] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.row}>
         <Text style={styles.header}>Viorra</Text>
         <View style={[styles.row, {width: 65}]}>
            <Image style={styles.icon} source={require('../assets/icons/activeBell.png')} />
            <Image style={styles.icon} source={require('../assets/icons/cart.png')} />
         </View>
      </View>
      {/* Search Box Input Field */}
      <View style={styles.searchBox}>
         <Image style={styles.icon2} source={require('../assets/icons/lens.png')} />
         <TextInput style={styles.input} placeholder="Search for all products" value={text} onChangeText={setText} placeholderTextColor="#888"
      />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
   container: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: "#FFFFFF",
      borderBottomColor: "#333333",
      borderBottomWidth: 0.4
   },
   row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   icon : {
      height: 24,
      width: 24
   },
   icon2 : {
      height: 19,
      width: 19
   },
   header: {
    fontFamily: 'Italiana-Regular',
    fontWeight: '400',
    fontStyle: 'normal', // or "italic"
    fontSize: 30,
    lineHeight: 21,
    letterSpacing: -0.32,
    textAlign: 'center',
    color: '#B84953'
  },
  searchBox: {
   display: 'flex',
   flexDirection: 'row',
   marginTop: 20,
   borderColor: '#8F8F8F',
   borderWidth: 0.6,
   borderRadius: 24,
   alignItems: 'center',
   paddingHorizontal: 12,
   paddingVertical: 4,
   gap: 10,
   marginBottom: 10
  },
  input: {
   fontFamily: 'Inter',
   fontWeight: '400',
   fontStyle: 'normal',
   fontSize: 12,
   lineHeight: 12,
   color: '#4B4B4B',
   width: "90%",
  }
})

export default HomeHeader