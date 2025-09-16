/* eslint-disable react/self-closing-comp */
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.bottomContainer}>
        <Text style={styles.bestPrdTxt}>Best Products</Text>
        <Text style={styles.productCountTxt}>114 products</Text>
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
  }

})

export default HomeScreen