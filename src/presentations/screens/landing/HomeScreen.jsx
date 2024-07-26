import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import ProductTile from "../../components/items/ProductTile";
import apiCall from "../../../data/network/ApiClient";
import Spacer from "../../components/Spacer";
import CategoryItem from "../../components/items/CategoryItem";
import categoryData from "../../../data/mock/CategoriesList";
import { ScrollView } from "react-native-gesture-handler";
import Heading from "../../components/text/Heading";
import Labels from "../../../resources/label";
import styles from "../../components/styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await apiCall("/products", "GET");
        setProductList(response);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      }
    };
    getProducts();
  }, []);

  const renderProduct = ({ item }) => (
    <ProductTile key={item.id} product={item} />
  );
  const renderCategory = ({ item }) => (
    <CategoryItem key={item.id} category={item} />
  );

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <Spacer height={50} />
        <Heading text={Labels.CATEGORIES}></Heading>
        <Spacer height={20} />
        <FlatList
          data={categoryData}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={renderCategory}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
        />
        <Heading text={Labels.TRENDING_NOW}></Heading>
        <FlatList
          data={productList}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.productContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
