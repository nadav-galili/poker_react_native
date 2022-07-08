import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import * as Yup from "yup";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from "@react-native-community/google-signin";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppIcon from "../components/AppIcon";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  // nickName: Yup.string().required().min(2).label("NickName"),
});

function LoginScreen() {
  const onSubmit = (values) => {
    console.log(values);
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
          {/* <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account-details"
            keyboardType="email-address"
            name="nickName"
            placeholder="nickName"
            textContentType="emailAddress"
          /> */}
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          {/* <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={_signIn}
            disabled={state.isSigninInProgress}
          /> */}

          <SubmitButton title="Login" style={{ padding: 30 }} />
        </AppForm>
      </ImageBackground>
      {/* <Image style={styles.logo} source={require("../assets/17450.jpg")} /> */}
    </Screen>
  );
}

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
