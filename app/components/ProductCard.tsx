import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Product } from "../data/types/product";
import { useNavigation } from "@react-navigation/native";
import ProductImage from "./ProductImage";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetail", { id: product.id })}
    >
      <ProductImage uri={product.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 12,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    marginTop: 4,
    fontSize: 14,
    color: "#555",
  },
});
