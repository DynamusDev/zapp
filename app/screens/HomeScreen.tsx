import React, { useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useQuery } from "react-query";
import { fetchProducts, fetchCategories } from "../api/products.api";
import { mapProduct } from "../data/mappers/product.mapper";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import { useProductStore } from "../stores/product.store";
import Icon from "react-native-vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import { registerForPushNotificationsAsync } from "../notifications/registerForPush";

export default function HomeScreen() {
  const route = useRoute<any>();
  const categorySlug = route.params?.categorySlug;
  const { filters, setFilters } = useProductStore();
  const { data, isLoading, error } = useQuery("products", fetchProducts);
  const { data: categories } = useQuery("categories", fetchCategories);

  useEffect(() => {
    if (categorySlug) {
      setFilters({ category: categorySlug });
    }
  }, [categorySlug]);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      if (token) {
        console.log("Push token:", token);
      }
    });
  }, []);

  if (isLoading)
    return (
      <View style={styles.emptyContainer}>
        <ActivityIndicator style={StyleSheet.absoluteFill} />
      </View>
    );
  if (error)
    return (
      <View style={styles.emptyContainer}>
        <Text>Error loading products</Text>
      </View>
    );

  const products = data
    ?.map(mapProduct)
    .filter((p) =>
      filters.category ? p.category === filters.category.toLowerCase() : true
    )
    .sort((a, b) =>
      filters.sortBy === "price" ? a.price - b.price : b.rating - a.rating
    );

  return (
    <View>
      <CategoryFilter categories={categories || []} />
      {products?.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="document-text-outline" color="#666" size={30} />
          <Text style={styles.emptyMessage}>No products found.</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  emptyMessage: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  emptyContainer: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
