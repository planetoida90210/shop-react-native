import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icons from "@expo/vector-icons/MaterialIcons";

//external imports
import { Image1, ProfileUser } from "../assets/images";

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView className="space-y-6">
        {/* Header section */}
        <View className="flex-row px-6 py-4 items-center gap-2">
          <Image source={ProfileUser} className="w-12 aspect-square rounded-full" resizeMode="cover" />
          <View className="flex-1">
            <Text className="font-semibold text-base space-x-1 text-black" numberOfLines={1}>
              Hi, Bolek
            </Text>
            <Text className="text-black/50 text-sm">Welcome to ShopApp</Text>
          </View>
          <TouchableOpacity className="w-12 aspect-square items-center justify-center rounded-full border border-black/20">
            <Icons name="notifications" size={24} color={"black"} />
          </TouchableOpacity>
        </View>
        {/* Search section */}
        <View className="flex-row px-6 gap-3">
          <TouchableOpacity className="flex-1 flex-row h-12 rounded-full border border-black/20 content-center px-4 gap-3">
            <Icons name="search" size={24} color="gray" className="opacity-20" />
            <Text className="leading-6 text-black/50">Search...</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-12 aspect-square items-center justify-center rounded-full bg-black/90">
            <Icons name="tune" size={24} color={"white"} />
          </TouchableOpacity>
        </View>
        {/* Grid Collection View */}
        <View className="px-7">
          {/* Title Bar */}
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-semibold">New Collections</Text>
            <TouchableOpacity>
              <Text className="text-black/60">See All</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row">
            {/* Card */}
            <View className="flex-1 h-[200px] relative overflow-hidden">
              <Image source={Image1} resizeMode="cover" className="w-[200px] h-[200px] rounded-xl flex-1" />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
