import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "react-query";
import { fetchProductById } from "../api/products.api";
import { mapProduct } from "../data/mappers/product.mapper";

export default function ProductDetailScreen() {
  const route = useRoute<any>();
  const { id } = route.params;

  const { data, isLoading, error } = useQuery(["product", id], () =>
    fetchProductById(id)
  );

  if (isLoading)
    return (
      <ActivityIndicator
        size="small"
        color="#999"
        style={StyleSheet.absoluteFill}
      />
    );
  if (error || !data) return <Text>Product not found</Text>;

  const product = mapProduct(data);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      {product.brand && (
        <Text style={styles.brand}>Brand: {product.brand}</Text>
      )}
      <Text style={styles.stock}>Stock: {product.stock}</Text>
      <Text style={styles.rating}>Rating: {product.rating}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    height: 250,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  price: {
    fontSize: 18,
    color: "#555",
    marginVertical: 4,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
  brand: {
    marginTop: 12,
    fontSize: 14,
    color: "#444",
  },
  stock: {
    fontSize: 14,
    color: "#444",
  },
  rating: {
    fontSize: 14,
    color: "#444",
  },
});
