import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { ProfileUser } from "../assets/images";

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View className="flex-row p-6 items-center gap-2">
          <Image source={ProfileUser} className="w-[52px] aspect-square rounded-full" resizeMode="cover" />
          <View className="flex-1">
            <Text>Hi, Bolek </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
