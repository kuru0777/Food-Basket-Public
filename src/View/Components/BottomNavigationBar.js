import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuPage from "../Screens/MenuPage/MenuPage";
import ProfileScreen from "../Screens/MenuPage/DenemePage";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigationBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="MenuPage"
      activeColor="#DE3C3C" // Aktif renk
      inactiveColor="white" // Pasif renk
      barStyle={{ backgroundColor: '#CC0000' }}
    >
      <Tab.Screen
        name="MenuPage"
        component={MenuPage}
        options={{
          tabBarColor: 'white',
          tabBarLabel: 'Anasayfa', // Burada label olarak "Home" kullanılıyor
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} /> // Icon rengi `color` olarak ayarlanır
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil', // Burada label olarak "Account" kullanılıyor
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} /> // Icon rengi `color` olarak ayarlanır
          ),
        }}
      />
      {/* Diğer sayfaları burada ekleyin */}
    </Tab.Navigator>
  );
}

export default BottomNavigationBar;
