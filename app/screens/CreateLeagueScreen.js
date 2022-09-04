import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import AppIcon from "../components/AppIcon";
import * as Yup from "yup";
import { storage, fireDB, functions } from "../api/firebase";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ImageInput from "../components/forms/ImageInput";
// import generateLeagueNumber from "../config/generateLeagueNumber";
// import { collection, query, where, getDocs } from "firebase/firestore";

const validationSchema = Yup.object().shape({
  leagueName: Yup.string().required().min(2).label("leagueName"),
  image: Yup.string().min(0).max(1, "Only one image is allowed."),
});
function CreateLeagueScreen() {
  const [imageUri, setImageUri] = useState();
  const onSubmit = async (values) => {
    console.log(values);
    // console.log(functions);
    const say = functions.httpsCallable("getTeamNum");
    say().then((result) => {
      console.log(result.data);
    });

    // const number = functions.httpsCallable("getTeamNum");
    // number();

    // const leagueNumber = functions.httpsCallable("generateRandomLeagueNumber");
    // leagueNumber(fireDB).then((result) => {
    //   console.log("leagggggg", result.data);
    //   return result.data;
    // });

    // const leagueRef = query(
    //   collection(fireDB, "leagues"),
    //   where("leagues", "==", randomNumber)
    // );
    // const querySnapshot = getDocs(leagueRef);
    // console.log("rrr", querySnapshot);
    // // const league = await getDocs(docRef);
    // console.log("leaguesRef", leagueRef);
    // // console.log("leagues", league);
    // if (!leagueRef) return randomNumber;
    // const filename = imageUri.split("/").pop();
    // return fireDB.collection("leagues").doc(leagueNumber).set({
    //   leagueName: values.leagueName,
    //   image: filename,
    //   leagueNumber: leagueNumber,
    // });

    // uploadImage();
  };

  const uploadImage = async () => {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const filename = imageUri.split("/").pop();
    const ref = storage.ref("leagues").child(filename).put(blob);

    try {
      await ref;
      console.log("Uploaded image", filename);
      // return filename;
      alert(`Photo:${filename} Uploaded succesfully`);
      setImageUri(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/17450.jpg")}
      style={styles.container}
    >
      <View>
        <AppIcon titleText="Create A New League" />
        <AppForm
          initialValues={{ leagueName: "", image: "" }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            // autoCapitalize="none"
            autoCorrect={false}
            icon="cards-spade"
            keyboardType="email-address"
            name="leagueName"
            placeholder="League Name"
            textContentType="emailAddress"
          />
          <AppText style={styles.text}>
            Dont worry, you can change league name later
          </AppText>
          <ImageInput
            name="image"
            imageUri={imageUri}
            onChangeImage={(uri) => setImageUri(uri)}
          />
          <AppText style={styles.text}>
            Choose league pic- you can change your pic later
          </AppText>
          <SubmitButton title="Create League" />
        </AppForm>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
    paddingLeft: 10,
    fontSize: 14,
  },
});

export default CreateLeagueScreen;
