/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Lucide } from '@react-native-vector-icons/lucide';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';
import ProductScreen from "../screens/ProductScreen";
import OffersScreen from "../screens/OffersScreen";
import ProductHeader from "../components/ProductHeader";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#CC3D3D",   // active color (pinkish here)
      tabBarInactiveTintColor: "#070707",    // inactive color
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        return route.name === 'Home' ?  <Icon name='home' size={size} color={color} /> : route.name === 'Offers' ? <Lucide  name='tag' size={size} color={color} /> : route.name === 'Wishlist' ? <Icon name='heart-outline' size={size} color={color} /> : <FontAwesome  name='user-circle-o' size={size} color={color} /> ;
        
      }
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Offers" component={OffersScreen} />
      <Tab.Screen name="Wishlist" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Main" component={Tabs} />
         <Stack.Screen name="Product" component={ProductScreen} options={{
          headerShown: true,
          header: (props) => <ProductHeader {...props}  />,
          headerTransparent: true,        // ✅ makes background fully transparent
          headerShadowVisible: false,  
         }} />
       {/* <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
