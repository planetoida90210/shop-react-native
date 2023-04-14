import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen, HomeScreen } from "../screens";

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <RootStack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
