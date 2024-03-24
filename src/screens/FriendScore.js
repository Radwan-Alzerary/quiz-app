import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import Icon, { Icons } from "../components/global/icons";
import Colors from "../components/constants/Colors";

const friendName = [
  {
    name: "mustafa abdulla",
    score: 60,
  },
  {
    name: "mohammed yaser",
    score: 40,
  },
  {
    name: "noor ahmed",
    score: 20,
  },
  {
    name: "noor ahmed",
    score: 20,
  },
  {
    name: "noor ahmed",
    score: 20,
  },
  {
    name: "noor ahmed",
    score: 20,
  },
];
const FriendScore = ({ navigation }) => {
  return (
    <View>
      <View className="h-full">
        <View className="h-1/2 w-full bg-[#A05AD7] flex justify-center items-center  relative">
          <TouchableOpacity
            className="absolute top-12 left-4 z-40"
            onPress={() => navigation.navigate("Home")}
          >
            <View>
              <Icon
                type={Icons.AntDesign}
                name={"leftcircleo"}
                color={Colors.white}
              />
            </View>
          </TouchableOpacity>

          <View className="bg-white absolute -right-40 bottom-3 w-52 h-52 opacity-10 rounded-full"></View>
          <View className="bg-white absolute -left-12 top-3 w-32 h-32 opacity-10 rounded-full"></View>
          <View className="bg-white absolute right-12 top-12 w-12 h-12 opacity-10 rounded-full"></View>
          <View className="h-48  w-12 absolute bottom-0 flex flex-row justify-center items-end">
            <View className="  items-center">
              <View className="h-16 w-16 rounded-full bg-white"></View>
              <Text className="text-lg font-bold text-white">احمد ياسر</Text>

              <View className="h-40  w-24 bg-purple-400 justify-center items-center">
                <Text className="text-6xl text-white font-bold">2</Text>
              </View>
            </View>

            <View className="  items-center">
              <View className="h-16 w-16 rounded-full bg-white"></View>
              <Text className="text-lg font-bold text-white">ساره احمد</Text>
              <View className="h-60 w-28 bg-purple-300 justify-center items-center">
                <Text className="text-6xl text-white font-bold">1</Text>
              </View>
            </View>

            <View className="  items-center">
              <View className="h-16 w-16 rounded-full bg-white"></View>
              <Text className="text-lg font-bold text-white">ساره احمد</Text>

              <View className="h-36 w-24 bg-purple-400 justify-center items-center">
                <Text className="text-6xl text-white font-bold">3</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="bg-white   w-full h h-full p-3   ">
          {friendName.map((data, index) => (
            <View className="flex flex-row items-center justify-between gap-3 mt-2 ">
              <Text>0{index + 4}</Text>
              <View className="h-12 w-12 bg-blue-200 rounded-full">
                <Image
                  source={{ uri: "https://randomuser.me/api/portraits/med/women/75.jpg" }} // Replace this URL with your image URL
                />
              </View>
              <Text className="w-40">{data.name}</Text>
              <View className="w-20 h-8 bg-purple-200 rounded-full justify-center items-center">
                <Text className="text-lg font-bold text-purple-700">
                  {data.score}%
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default FriendScore;
