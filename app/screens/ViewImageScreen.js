import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        source={require("../assets/chips.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primaryBlue,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primaryOrange,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
