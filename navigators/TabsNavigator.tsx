import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartScreen, HomeScreen, PaymentScreen, ProfileScreen } from "../screens";

export type TabsStackParamList = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
};

const TabStack = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator = () => {
  return (
    <TabStack.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <TabStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <TabStack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
      <TabStack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
      <TabStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </TabStack.Navigator>
  );
};

export default TabsNavigator;
