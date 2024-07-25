import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles";

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.categoryItem}>
      <Image source={category.image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{category.title}</Text>
    </View>
  );
};

export default CategoryItem;
