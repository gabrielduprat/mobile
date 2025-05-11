// react-native
import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useState } from "react";
import { Redirect } from "expo-router";
import { useAuth } from '@/src/hooks/useAuth';
import { AuthProvider } from "../utils/contexts/AuthContext";

// const RootNavigation = () => {
//     //const [isLogin, setIsLogin] = useState(true);

//     const {user} = useAuth();

//     return (
//     <>
//         <Stack screenOptions={{ headerShown: false }}></Stack>
//         {user ? <Redirect href="/(tabs)"/> : <Redirect href="/(auth)"/>}   
//     </>
//     );
// };

// export default RootNavigation;

export default function Layout() {
    return (
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}></Stack>
        </AuthProvider>
    );
}