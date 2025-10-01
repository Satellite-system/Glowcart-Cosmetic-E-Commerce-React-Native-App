import { View, Text, Image, StyleSheet } from 'react-native'
import React, { JSX } from 'react'

type RatingProps = {
   rating?: number;
};

const RatingComponent:React.FC<RatingProps> = ({rating}) => {
   let currRating = rating || 0;
   let numberOfStars = 5;
   const stars: JSX.Element[] = [];
   
   for(let i=0; i<numberOfStars; i++){
      if(currRating>=1){
         stars.push(<Image key={i} source={require("../assets/icons/fullStar.png")} style={styles.starIcon} />)
         currRating--;
      }else if(currRating>0){
         stars.push(<Image key={i} source={require("../assets/icons/halfStar.png")} style={styles.starIcon} />)
         currRating=0;
      } else {
         stars.push(<Image key={i} source={require("../assets/icons/emptyStar.png")} style={styles.starIcon} />)
      }
   }  

  return (
   <View style={styles.container}>
      <View style={styles.starsRow}>{stars}</View>
      <Text>{rating}/5</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '50%',
   marginTop: 13,
   paddingBottom: 20,
  },
  starsRow: {
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   gap: 1
  },
  starIcon: {
   width: 24,
   height: 24
  }
})

export default RatingComponent