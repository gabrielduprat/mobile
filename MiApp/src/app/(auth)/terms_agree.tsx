// react-native
import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView , StyleSheet, Image} from "react-native";
import imagePath from "@/src/constants/imagePath";
import { moderateScale, verticalScale } from "react-native-size-matters";
import BottomComponent from "@/src/components/atoms/BottomComponent";

const TermsAgree = () => {
  return (
    <SafeAreaView>
        <View style={styles.header}>
            <Text style={styles.welcomeText}>Welcome to the app</Text>
            <Image source={imagePath.logo} style={styles.imageStyle} 
            resizeMode="contain" />
            <Text style={styles.descriptionText}>
              Read our <Text style={styles.linkText}>Privacy Policy.</Text>Tap "Agree 
              and Continue" to accept the <Text style={styles.linkText}>Terms of service.</Text>
              </Text>
            <View style={{width:moderateScale(300)}}>
                <BottomComponent title={"Terms and Conditions"}/>
            </View>
            
        </View>
        <View style={styles.footer}>
            <Text style={styles.fromText}></Text>
            <Text style={styles.facebookText}>Facebook</Text>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // take up all the available space - acomodar en columnas
    backgroundColor: "white", // use a light yellow background
    alignItems: "center", // center the children vertically
    justifyContent: "center", // center the children horizontally
    paddingVertical: moderateScale(70), // add some padding between the top and bottom of the container
    paddingHorizontal: moderateScale(30),   // add some padding between the left and right of the container
  },
  header: {
    alignItems: "center",
    gap: moderateScale(30), // add some padding
  },
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
  welcomeText: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: "black",
  },
  descriptionText: {
    fontSize: moderateScale(15),
    color: "black",
    paddingVertical: moderateScale(70), // add some padding between the top and bottom of the container
    paddingHorizontal: moderateScale(30),   // add some padding between the left and right of the container
  },
  linkText: {
    fontSize: moderateScale(15),
    color: "blue",
  },
});


export default TermsAgree;