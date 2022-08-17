import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import * as Yup from "yup";
import { auth } from "../api/firebase";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppIcon from "../components/AppIcon";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  const onSubmit = (values) => {
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with :", user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Screen style={styles.container}>
      <ImageBackground
        source={require("../assets/17450.jpg")}
        style={{ height: "100%" }}
      >
        <AppIcon titleText="Login Form" />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" style={{ padding: 30 }} />
        </AppForm>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingBottom: 50,
    // paddingTop: 70,
    // flex: 2,
  },
  icon: {
    // marginTop: 160,
    // paddingTop: 100,
  },
  //   logo: {
  //     width: 80,
  //     height: 80,
  //     alignSelf: "center",
  //     marginTop: 50,
  //     marginBottom: 20,
  //   },
});

export default LoginScreen;
