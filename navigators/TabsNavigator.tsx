import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens";

export type TabsStackParamList = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
};

const TabStack = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="Home" component={HomeScreen} />
      <TabStack.Screen name="Cart" component={HomeScreen} />
      <TabStack.Screen name="Payment" component={HomeScreen} />
      <TabStack.Screen name="Profile" component={HomeScreen} />
    </TabStack.Navigator>
  );
};

export default TabsNavigator;
