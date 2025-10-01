import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type ReviewComponentProps = {
   review?: { reviewerName: string; comment: string; rating: number };
}

const ReviewComponent:React.FC<ReviewComponentProps> = ({review}) => {
   // const { reviewerName, comment, rating } = review ;

  return (
    <View style={styles.container}>
      <Text>{review?.reviewerName}</Text>
      <Text>{JSON.stringify(review)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 14,
   }
})

export default ReviewComponent