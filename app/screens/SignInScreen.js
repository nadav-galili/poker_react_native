import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import * as Yup from "yup";
import ImageInput from "../components/forms/ImageInput";
import { auth, storage } from "../api/firebase";
import { fireDB } from "../api/firebase";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  image: Yup.string().min(0).max(1, "Only one image is allowed."),
  nickName: Yup.string().required().min(2).label("NickName"),
});

function SignInScreen() {
  const [imageUri, setImageUri] = useState();

  const onSubmit = async (values) => {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        const filename = imageUri.split("/").pop();
        uploadImage();
        //add user to users collection
        return fireDB.collection("users").doc(user.uid).set({
          email: values.email,
          password: values.password,
          nickName: values.nickName,
          image: filename,
        });
      })
      .catch((error) => alert(error.message));
  };

  const uploadImage = async () => {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const filename = imageUri.split("/").pop();
    const ref = storage.ref().child(filename).put(blob);

    try {
      await ref;
      console.log("Uploaded image", filename);
      return filename;
    } catch (error) {
      console.log(error);
    }
    // setUploading(false);
    alert("Photo Uploaded succesfully");
    setImageUri(null);
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
            name="nickName"
            placeholder="nickName"
            textContentType="emailAddress"
          />
          <AppText style={styles.text}>
            Dont worry, you can change your nick name later
          </AppText>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <ImageInput
            name="image"
            imageUri={imageUri}
            onChangeImage={(uri) => setImageUri(uri)}
          />
          <AppText style={styles.text}>
            Choose profile pic- you can change your pic later
          </AppText>
          <SubmitButton title="Sign In" />
        </AppForm>
      </ImageBackground>
    </Screen>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 14,
    marginLeft: 10,
  },
});
export default SignInScreen;
