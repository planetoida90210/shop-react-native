import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icons from "@expo/vector-icons/MaterialIcons";

//external imports
import { ProfileUser } from "../assets/images";

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View className="flex-row px-6 py-4 items-center gap-2">
          <Image source={ProfileUser} className="w-14 aspect-square rounded-full" resizeMode="cover" />
          <View className="flex-1">
            <Text className="font-semibold text-base space-x-1 text-black" numberOfLines={1}>
              Hi, Bolek
            </Text>
            <Text className="text-black/50 text-sm">Discover fashion that suit your style</Text>
          </View>
          <TouchableOpacity className="w-14 aspect-square items-center justify-center rounded-full border border-black/20">
            <Icons name="notifications" size={24} color={"black"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
