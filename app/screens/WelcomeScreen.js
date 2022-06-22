import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/poker_bg.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/newIcon.jpeg")} style={styles.logo} />
        <Text>Poker - Underdog</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#3A86FF",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#FF006E",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
