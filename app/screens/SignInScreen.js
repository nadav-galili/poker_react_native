import React, { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import * as Yup from "yup";
import ImageInput from "../components/forms/ImageInput";
import { authentication } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppIcon from "../components/AppIcon";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  image: Yup.string().min(0).max(1, "Only one image is allowed."),
  nickName: Yup.string().required().min(2).label("NickName"),
});

function SignInScreen() {
  const [imageUri, setImageUri] = useState();

  const onSubmit = async (values, onsubmit) => {
    createUserWithEmailAndPassword(
      authentication,
      values.email,
      values.password
    )
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
    // onsubmit();
  };

  return (
    <Screen>
      <ImageBackground
        source={require("../assets/17450.jpg")}
        style={{ height: "100%" }}
      >
        <AppIcon titleText="Sign In" />
        <AppForm
          initialValues={{ email: "", password: "", nickName: "", image: "" }}
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
            icon="account-details"
            // keyboardType="email-address"
            name="nickName"
            placeholder="nickName"
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
          {/* <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={_signIn}
            disabled={state.isSigninInProgress}
          /> */}
          <ImageInput
            name="image"
            imageUri={imageUri}
            onChangeImage={(uri) => setImageUri(uri)}
          />
          <SubmitButton title="Sign In" style={{ padding: 30 }} />
        </AppForm>
      </ImageBackground>
    </Screen>
  );
}

export default SignInScreen;
