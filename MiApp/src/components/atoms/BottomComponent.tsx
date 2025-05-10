import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

const BottomComponent = ({title}: any) => {
  return (
    <TouchableOpacity style={styles.bottomContainer}>      
        <Text style={styles.bottomText}>{title}</Text>
    </TouchableOpacity>
    );
};
//TouchableOpacity es un componente que se puede hacer clic en
const styles = StyleSheet.create({
    bottomContainer: {
    backgroundColor: "green",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    borderRadius: moderateScale(4),
    alignItems: "center",
  },
  bottomText: {
    color: "white",
    fontSize: moderateScale(13),    
  },
});

export default BottomComponent;