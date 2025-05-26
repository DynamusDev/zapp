import React from "react";
import { NavigationContainer, LinkingOptions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { productId: number };
  Category: { categorySlug: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ["zapp://"],
  config: {
    screens: {
      Home: "",
      ProductDetail: "product/:productId",
      Category: "category/:categorySlug",
    },
  },
};

export default function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Products" }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ title: "Product Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
