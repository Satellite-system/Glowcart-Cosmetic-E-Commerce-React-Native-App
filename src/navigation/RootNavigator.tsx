/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
// import ProductScreen from "../screens/ProductScreen";
// import CartScreen from "../screens/CartScreen";
// import CheckoutScreen from "../screens/CheckoutScreen";
// import SearchScreen from "../screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let name = route.name === 'Home' ? 'home' : route.name === 'Search' ? 'search' : 'cart';
        return <Icon name={name} size={size} color={color} />;
      }
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={CartScreen} /> */}
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Main" component={Tabs} />
       {/* <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
