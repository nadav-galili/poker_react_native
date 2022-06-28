import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Text,
  Button,
} from "react-native";
import * as Yup from "yup";
import ImageInput from "../components/forms/ImageInput";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Icon from "../components/Icon";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from "@react-native-community/google-signin";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
// import FormImagePicker from "../components/forms/FormImagePicker";
import AppIcon from "../components/AppIcon";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  image: Yup.string().min(0).max(1, "Only one image is allowed."),
  nickName: Yup.string().required().min(2).label("NickName"),
  kkk: Yup.string(),
});

function SignInScreen() {
  const [imageUri, setImageUri] = useState();

  return (
    <Screen style={styles.container}>
      <ImageBackground
        source={require("../assets/17450.jpg")}
        style={{ height: "100%" }}
      >
        <AppIcon titleText="Sign In Form" />
        <AppForm
          initialValues={{ email: "", password: "", image: "" }}
          onSubmit={(values) => console.log("values", values)}
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
          {/* <Button
            // name="images"
            title="Select Image"
            onPress={selectImage}
            style={{ width: 100, height: 100 }}
          /> */}
          {/* <FormImagePicker name="image" /> */}
          {/* <Image
            source={{ uri: imageUri }}
            style={{ width: 100, height: 100, margin: 20 }}
          /> */}
          <ImageInput
            imageUri={imageUri}
            onChangeImage={(uri) => setImageUri(uri)}
          />
          <SubmitButton title="Sign In" style={{ padding: 30 }} />
        </AppForm>
      </ImageBackground>
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

export default SignInScreen;
