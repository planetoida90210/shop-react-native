import { View, Image } from "react-native";
import React from "react";
import { Image1 } from "../assets/images";

const CollectionCard = () => {
  return (
    <View className="flex-1 justify-center items-center overflow-hidden rounded-md m-0.5">
      <Image source={Image1} resizeMode="contain" />
    </View>
  );
};

export default CollectionCard;
