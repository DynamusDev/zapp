import React from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useProductStore } from "../stores/product.store";
import { Category } from "../data/types/product";

type Props = {
  categories: Category[];
};

export default function CategoryFilter({ categories }: Props) {
  const { filters, setFilters } = useProductStore();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <TouchableOpacity
        style={[styles.badge, !filters.category && styles.active]}
        onPress={() => setFilters({ category: "" })}
      >
        <Text
          style={[styles.label, filters.category === "" && styles.activeLabel]}
        >
          All
        </Text>
      </TouchableOpacity>

      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.name}
          style={[styles.badge, filters.category === cat.name && styles.active]}
          onPress={() => setFilters({ category: cat.name })}
        >
          <Text
            style={[
              styles.label,
              filters.category === cat.name && styles.activeLabel,
            ]}
          >
            {cat.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  badge: {
    marginRight: 8,
    height: 32,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#eee",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
    color: "#333",
  },
  active: {
    backgroundColor: "#333",
  },
  activeLabel: {
    color: "#dadada",
  },
});
