import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import * as Yup from "yup";
import ImageInput from "../components/forms/ImageInput";
// import {
//   GoogleSignin,
// GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
// import { authentication } from "../firebase/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppIcon from "../components/AppIcon";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  image: Yup.string().min(0).max(1, "Only one image is allowed."),
  nickName: Yup.string().required().min(2).label("NickName"),
});

function SignUpScreen() {
  const [imageUri, setImageUri] = useState();
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const onSubmit = async (values, onsubmit) => {
    // createUserWithEmailAndPassword(
    //   authentication,
    //   values.email,
    //   values.password
    // )
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log(user.email);
    //   })
    //   .catch((error) => alert(error.message));
    // onsubmit();
  };

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { accessToken, idToken } = await GoogleSignin.signIn();
      setloggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert("Cancel");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert("Signin in progress");
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert("PLAY_SERVICES_NOT_AVAILABLE");
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["email"], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        "418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
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
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                // size={GoogleSigninButton.Size.Wide}
                // color={GoogleSigninButton.Color.Dark}
                onPress={_signIn}
              />
            </View>
            <View style={styles.buttonContainer}>
              {!loggedIn && <Text>You are currently logged out</Text>}
              {loggedIn && (
                <Button onPress={signOut} title="LogOut" color="red"></Button>
              )}
            </View>
          </View>
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

export default SignUpScreen;
