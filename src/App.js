import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuPage from './View/Screens/MenuPage/MenuPage';
import BottomNavigationBar from './View/Components/BottomNavigationBar';
import MyAppbar from './View/Components/Appbar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <MyAppbar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={BottomNavigationBar} />
        <Stack.Screen name="MenuPage" component={MenuPage} />
        {/* Diğer sayfa yollarını burada ekleyin */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
