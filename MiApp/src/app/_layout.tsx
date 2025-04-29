// react-native
import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useState } from "react";
import { Redirect } from "expo-router";

const RootNavigation = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
    <>
        <Stack screenOptions={{ headerShown: false }}></Stack>
        {isLogin ? <Redirect href="/(main)"/> : <Redirect href="/(auth)"/>}   
    </>
    );
};

export default RootNavigation;