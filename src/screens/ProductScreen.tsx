/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, StyleSheet, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "./../types/RootStackParamList"; 
import RatingComponent from '../components/RatingComponent';
import LineComponent from '../components/LineComponent';
import ReviewComponent from '../components/ReviewComponent';
import ProductHeader from '../components/ProductHeader';

type ProductRouteProp = RouteProp<RootStackParamList, "Product">;

const ProductScreen = () => {
  const route = useRoute<ProductRouteProp>();
  const product = route.params;
  const {id, description, title, images, rating, brand, price, discountPercentage, dimensions, warrantyInformation, shippingInformation, reviews} = route.params.Product;

  console.log("Product ", product)

  return (
    <View style={styles.container}>
      {/* <ProductHeader  /> */}
      <ScrollView>
        <Image source={{uri: images[0]}} style={styles.image} />
        <View style={styles.firstRow}>
          <View style={styles.viewSimilarBx}>
            <Text style={styles.viewSimilarTxt}>View Similar</Text>
          </View>
          <Image source={require("../assets/icons/share.png")} style={styles.icon} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desciption}>{description}</Text>

        <RatingComponent rating={rating}/>
        <LineComponent type="horizontal" />

        <Text style={styles.soldBy}>Sold by : <Text style={styles.brandName}>{brand}</Text></Text>

        <View style={styles.priceCartRow}>
        <View style={styles.priceRow}>
          <Text style={styles.priceTxt}>Price: ${price}</Text>
          <Text style={styles.discountTxt}>Discount: {discountPercentage}%</Text>
        </View>
          <TouchableOpacity style={styles.addToBagBtn}><Text style={styles.addToBagBtnTxt}>Add to Bag</Text></TouchableOpacity>
        </View>

        <Text style={styles.highlightTxt}>Highlights</Text>

        <View style={styles.highlightBox}>
          <View style={styles.heighlightRow}>
            <View style={styles.heighlightInternalRow}>
              <Text style={styles.heighlightItemLabel}>Width</Text>
              <Text style={styles.heighlightItemValue}>{dimensions?.width}</Text>
            </View>
            <View style={styles.heighlightInternalRow}>
              <Text style={styles.heighlightItemLabel}>Warranty</Text>
              <Text style={styles.heighlightItemValue}>{warrantyInformation}</Text>
            </View>
          </View>
          <LineComponent type="vertical" />
          <View style={[styles.heighlightRow, {marginLeft: 20}]}>
            <View style={styles.heighlightInternalRow}>
              <Text style={styles.heighlightItemLabel}>Height</Text>
              <Text style={styles.heighlightItemValue}>{dimensions?.height}</Text>
            </View>
            <View style={styles.heighlightInternalRow}>
              <Text style={styles.heighlightItemLabel}>Shipping</Text>
              <Text style={styles.heighlightItemValue}>{shippingInformation}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.ratingReviewTxt}>Ratings & Reviews</Text>

        <View style={{display:'flex', flexDirection: 'column', gap: 15, marginTop: 20, marginBottom: 50}}>
          {reviews && reviews.length>0 ? reviews.map((item, index)=>( <ReviewComponent review={item} key={index+item.date} />)) :  <Text style={{fontFamily:'Inter', fontSize:16, color:"#333333", marginTop:10}}>No Reviews Yet!</Text>}
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: 10,
    backgroundColor: "#FFEDE8"
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 16,
    backgroundColor: "#eec5d3",
    marginHorizontal: 'auto',
    marginTop: 20
  },
  firstRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  viewSimilarBx: {
    borderColor: '#B84953',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2
  },
  viewSimilarTxt: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'center',
    color: '#B84953'
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 20,
    color: "#070707",
    marginTop: 18
  },
  desciption: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: "#333333",
    marginTop: 8,
    lineHeight: 21,
    letterSpacing: 0.25
  },
  soldBy: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 2,
    color: "#333333",
    marginTop: 10
  },
  brandName: {
    fontFamily: 'Inter-Medium'
  },
  priceCartRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    // backgroundColor: "#a0f49cff",
  },
  priceRow: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: "#f6f93bff",
    gap:2
  },
  addToBagBtn: {
    backgroundColor: "#B84953",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 7
  },
  priceTxt: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: -0.32,
    textAlign: 'center',
    color: "#070707"
  },
  discountTxt: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: -0.32,
    // textDecorationLine: 'line-through',
    color: "#767676"
  },
  addToBagBtnTxt: {
    fontFamily: 'Inter-Medium',
    fontSize: 20,
    // lineHeight: 21,
    letterSpacing: -0.32,
    textAlign: 'center',
    color: "#FFFFFF"
  },
  highlightTxt: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    letterSpacing: 1.5,
    color: "#070707",
    marginTop: 56
  },
  highlightBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  heighlightRow: {
    display: 'flex',
    flexDirection: "column",
    gap: 20,
    paddingVertical: 20,
    width: "49%"
  },
  heighlightInternalRow: {
    display: 'flex',
    flexDirection: "column",
    gap: 3
  },
  heighlightItemLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 2,
    color: "#333333"
  },
  heighlightItemValue: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 1,
    color: "#333333"
  },
  ratingReviewTxt: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    letterSpacing: 2,
    color: "#070707",
    marginTop: 35
  }

})

export default ProductScreen