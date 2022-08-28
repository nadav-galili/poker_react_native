import React, { useEffect } from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import { auth } from "../api/firebase";

function WelcomeScreen({ navigation }) {
  useEffect(() => {
    const checkUserState = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user", user);
        navigation.replace("MyTeamsScreen");
      } else {
        console.log("no user");
      }
    });
    return checkUserState;
  }, []);
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
    padding: 60,
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
    fontSize: 40,
    fontWeight: "700",
    paddingVertical: 20,
    color: colors.white,
    borderBottomWidth: 3,
    borderBottomColor: colors.white,
  },
});

export default WelcomeScreen;
