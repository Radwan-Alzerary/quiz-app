import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./src/components/global/HomeStack";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack></HomeStack>
    </NavigationContainer>
  );
}
