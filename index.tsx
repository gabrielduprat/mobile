// react-native-dotenv
import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Main = () => {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
    });
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
  return (
    <View
        style={{
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: 'black',
            }}>
      <Text style = {{ fontSize: 32, fontWeight: 600, color:"orange", fontFamily: "Roboto_400Regular"}}>UTN - Programacion III</Text>
    </View>
  );
};

export default Main;