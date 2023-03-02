import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "./OnBoardingScreen";
import HomeStack from "../navigation/HomeStack";
import { AuthStack } from "../navigation/AuthStack";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <>
    <StatusBar style="light" backgroundColor="#982529" />
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Root" component={HomeStack} />
    </Stack.Navigator>
  </>
);

export default RootStack;
