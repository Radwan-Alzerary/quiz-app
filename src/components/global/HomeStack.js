import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import HomeScreen from "../../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Dashboard, LoginScreen, RegisterScreen, ResetPasswordScreen, StartScreen } from "../../screens";
import FinalScore from "../../screens/FinalScore";
import FriendScore from "../../screens/FriendScore";
import QuizScreen from "../../screens/QuizScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Quation" component={QuizScreen} />
      <Stack.Screen name="FriendScore" component={FriendScore} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
