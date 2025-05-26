import React, { useState } from "react";
import { View, Image, ActivityIndicator, StyleSheet } from "react-native";

type Props = {
  uri: string;
};

export default function ProductImage({ uri }: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          size="small"
          color="#999"
          style={StyleSheet.absoluteFill}
        />
      )}
      <Image
        source={{ uri }}
        style={styles.image}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
});
