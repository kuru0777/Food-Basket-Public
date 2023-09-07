import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Carousel from './MenuPageSlider';
import MenuPageBestSeller from './MenuPageBestSeller';
import MyAppbar from './../../Components/Appbar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from './MenuPageStyles';
const MenuPage = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Carousel />
      </View>
      <View>
        <Text style={styles.text_style}>Popüler Menüler</Text>
      </View>
      <MenuPageBestSeller></MenuPageBestSeller>
    </SafeAreaProvider>
  );
}

export default MenuPage;
