import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput from "../components/login/TextInput";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="h-full bg-[#A05AD7] w-full">
      <SafeAreaView>
        <View className=" justify-center items-center">
          <Text className="text-lg font-bold text-white">Join to Quiz</Text>
        </View>
        <View className=" justify-center items-center h-3/4">
          <TextInput
            style={{
              borderWidth: 0, // Remove border
              backgroundColor: "transparent", // Remove background
              color: "white", // Set color of text to white
              fontSize: 40, // Set font size of text
              fontStyle: "italic", // Set font style to italic
              textAlign: "center", // Center align text
            }}
            className="text-white"
            placeholder="Enter PIN" // Set placeholder text
            color="white"
            placeholderTextColor="white" // Set placeholder text color
            returnKeyType="next"
            autoCapitalize="none"
            focusable={false} // Prevent the border from appearing on focus
          />
        </View>
        <View className="w-full justify-center items-center">
          <TouchableOpacity
            className="w-full"
            onPress={() => navigation.navigate("Quation")}
          >
            <View className="p-4 bg-purple-300 w-1/2 justify-center items-center rounded-full ">
              <Text className="">الدخول الى الاختبار</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
