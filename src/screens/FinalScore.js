import React from "react";
import Logo from "../components/login/Logo";
import Header from "../components/login/Header";
import Paragraph from "../components/login/Paragraph";
import Button from "../components/login/Button";
import Background from "../components/login/Background";
import { Text, TouchableOpacity, View } from "react-native";

export default function FinalScore({
  navigation,
  score,
  uncurrect,
  currentQuestionIndex,
  restart,
}) {
  return (
    <View className="bg-[#F9F9F9] w-full h-full">
      <View className="h-1/2 w-full bg-[#A05AD7] flex justify-center items-center rounded-b-3xl relative">
        <View className="bg-white absolute w-36 h-36 opacity-30 rounded-full"></View>
        <View className="bg-white absolute w-52 h-52 opacity-10 rounded-full"></View>
        <View className="bg-white absolute -right-40 bottom-3 w-52 h-52 opacity-10 rounded-full"></View>
        <View className="bg-white absolute -left-12 top-3 w-32 h-32 opacity-10 rounded-full"></View>
        <View className="bg-white absolute right-12 top-12 w-12 h-12 opacity-10 rounded-full"></View>
        <View className="bg-white absolute  -bottom-20 w-[90%] h-40 rounded-lg flex flex-row justify-center items-center ">
          <View className="flex flex-col justify-center items-center gap-8 ">
            <View>
              <Text className=" text-purple-600">
                {(
                  ((currentQuestionIndex + 1) / (uncurrect + score)) *
                  100
                ).toFixed(1)}
                %
              </Text>
              <Text>الاجابات المنجزة</Text>
            </View>
            <View>
              <Text className=" text-green-600">{score}</Text>
              <Text>الاجابات الصحيحة</Text>
            </View>
          </View>
          <View className="flex flex-col justify-center items-center gap-8 ml-3">
            <View>
              <Text className=" text-purple-600">
                {currentQuestionIndex + 1}
              </Text>
              <Text>مجموع الاسئلة</Text>
            </View>
            <View>
              <Text className=" text-red-600">{uncurrect}</Text>
              <Text>الاجابات الخاطئة</Text>
            </View>
          </View>
        </View>
        <View className="w-32 h-32 flex flex-col  justify-center items-center bg-white rounded-full">
          <Text className=" font-bold text-[#9B58CF]">نتيجة الاختبار</Text>
          <Text className=" font-bold text-xl text-[#9B58CF]">
            {" "}
            {((score / (currentQuestionIndex + 1)) * 100).toFixed(1)}%
          </Text>
        </View>
      </View>
      <View className="pt-32 h-full w-full flex flex-col ">
        <View className="w-full  flex flex-row justify-center gap-8 mb-4">
          <TouchableOpacity onPress={restart}>
            <View className="flex-col justify-center items-center">
              <View className="w-12 h-12   bg-blue-300 rounded-full "></View>
              <Text className="text-center">اعادة الاختبار</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("FriendScore")}>
            <View className="flex-col justify-center items-center">
              <View className="w-12 h-12 bg-amber-200 rounded-full "></View>
              <Text className="text-center">التقييمات</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View className="flex-col justify-center items-center">
              <View className="w-12 h-12 bg-purple-200    rounded-full "></View>
              <Text className="text-center">القائمة الرئيسية</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="w-full  flex flex-row justify-center gap-8 mb-4">
          <TouchableOpacity>
            <View className="flex-col justify-center items-center">
              <View className="w-12 h-12   bg-black rounded-full "></View>
              <Text className="text-center">اعادة الاختبار</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-col justify-center items-center">
              <View className="w-12 h-12   bg-pink-200 rounded-full "></View>
              <Text className="text-center">مشاهدة الاجابات</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View className="flex-col justify-center items-center">
              <View className="w-12 h-12   bg-green-200 rounded-full "></View>
              <Text className="text-center">القائمة الرئيسية</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
