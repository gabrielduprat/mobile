// react-native
import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
  <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="terms_agree" options={{ headerShown: false }} />
  </Stack>
  );
};

export default AuthLayout;