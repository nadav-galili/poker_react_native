import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Text,
  Button,
} from "react-native";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Icon from "../components/Icon";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from "@react-native-community/google-signin";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import AppIcon from "../components/AppIcon";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  image: Yup.array().min(0).max(1, "Only one image is allowed."),
  nickName: Yup.string().required().min(2).label("NickName"),
});

function SignInScreen() {
  // const [imageUri, setImageUri] = useState();
  // console.log("fff", imageUris[0]);
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("Permission Denied");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();

  //     if (!result.cancelled) setImageUri(result.uri);
  //   } catch (error) {
  //     console.log("error readinglll image", error);
  //   }
  // };
  return (
    <Screen style={styles.container}>
      <ImageBackground
        source={require("../assets/17450.jpg")}
        style={{ height: "100%" }}
      >
        <AppIcon titleText="Sign In Form" />
        <AppForm
          initialValues={{ email: "", password: "", images: "" }}
          onSubmit={(values) => console.log(values)}
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
          <FormImagePicker name="image" />
          {/* <Image
            source={{ uri: imageUri }}
            style={{ width: 100, height: 100, margin: 20 }}
          /> */}

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
