// react-native
import { View, Text, StyleSheet,SafeAreaView, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import imagePath from "@/src/constants/imagePath";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { router } from "expo-router";


const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  let navigateToTermsAgree = () => {
    router.push("/(auth)/terms_agree"); // navegar a la página de términos de uso
  };

  let loadingTimeout = () => {
    setIsLoading(true);
    //setTimeout(navigateToTermsAgree, 2000);
  };

  useEffect(() => {
    setTimeout(loadingTimeout, 2000);
  }, []);
// safeareaview encuadra todo dentro de un area correcta de visualización
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}></View>
          <Image source={imagePath.logo} style={styles.logoStyle} resizeMode="contain" />
          <Text style={styles.whatsappText}>WhatsApp</Text>
      <View style={styles.footer}>
          { isLoading ? (
            <>
              <ActivityIndicator size={moderateScale(48)} color={"black"}/> 
              <Text style={styles.facebookText}>Loading...</Text>
            </>

          ) : (
            <>
              <Text style={styles.fromText}></Text>
              <Text style={styles.facebookText}>Facebook</Text>
            </>
          )}
          <Text style={styles.fromText}></Text>
          <Text style={styles.facebookText}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, // take up all the available space
    flexDirection: "column", // stack the children vertically
    backgroundColor: "white", // use a light yellow background
    alignItems: "center", // center the children horizontally because we're using `flexDirection: "column"
    justifyContent: "center", // center the children horizontally; other options include `flex-start`, `flex-end`, `center`, `stretch`, and `space-between`
    paddingVertical: moderateScale(70), // add some padding vertically between the beginning and end of the container
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(7), // add some padding
  },
  footer: {
    alignItems: "center",
    height: verticalScale(70),
    justifyContent: "flex-end",
  },
  imageStyle: {
    height: moderateScale(50), // adjust the height of the image
    width: moderateScale(50),
  },
  logoStyle: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
  whatsappText: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "bold",
  },
  fromText: {
    fontSize: moderateScale(12),
    color: "black",
  },
  facebookText: {
    fontSize: moderateScale(15),
    color: "black",
  },
});

export default Auth;