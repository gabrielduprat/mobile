// react-native
import { View, Text, StyleSheet,SafeAreaView, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import imagePath from "@/src/constants/imagePath";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { router } from "expo-router";


const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  let navidateToTermsAgree = () => {
    router.push("/(auth)/terms_agree");
  };

  let loadingTimeout = () => {
    setIsLoading(true);
    setTimeout(navidateToTermsAgree, 2000);
  };

  useEffect(() => {
    setTimeout(loadingTimeout, 2000);
  }, []);

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
    backgroundColor: "yellow", // use a light yellow background
    alignItems: "center", // center the children vertically
    justifyContent: "center", // center the children horizontally
    paddingVertical: moderateScale(70), // add some padding
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
    height: moderateScale(50),
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