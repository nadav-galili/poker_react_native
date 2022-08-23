import React, { useState } from "react";
import { ImageBackground } from "react-native";
import * as Yup from "yup";
import ImageInput from "../components/forms/ImageInput";
import { auth, storage } from "../api/firebase";
import { fireDB } from "../api/firebase";
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
  const [uploading, setUploading] = useState(false);

  const onSubmit = async (values) => {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        uploadImage();
        //add user to users collection
        return fireDB.collection("users").doc(user.uid).set({
          email: values.email,
          nickName: values.nickName,
          image: imageUri,
        });
      })
      .catch((error) => alert(error.message));
  };

  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(imageUri);
    const blob = await response.blob();
    // const filename = imageUri.substring(imageUri.lastIndexOf("/") + 1);
    const filename = imageUri.split("/").pop();
    const ref = storage.ref().child(filename).put(blob);

    try {
      await ref;
    } catch (error) {
      console.log(error);
    }
    setUploading(false);
    alert("Photo Uploaded succesfully");
    setImageUri(null);
    // return filename;s
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
          <SubmitButton title="Sign In" style={{ padding: 30 }} />
        </AppForm>
      </ImageBackground>
    </Screen>
  );
}

export default SignInScreen;
