import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/poker_bg.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/newIcon.jpeg")} style={styles.logo} />
        <Text style={styles.tagLine}>Poker - Underdog</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <AppButton
          title="sign up"
          color="primaryPurple"
          onPress={() => navigation.navigate("SignInScreen")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "80%",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: colors.white,
  },
});

export default WelcomeScreen;
