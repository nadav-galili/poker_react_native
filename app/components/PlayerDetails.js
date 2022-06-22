import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function PlayerDetails({ image, name }) {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.playerImage} />
      <AppText style={styles.playerName}>{name}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "column",
    // padding: 5,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // maxWidth: "40%",
    // overflow: "hidden",
    padding: 5,
  },
  playerImage: {
    height: 40,
    width: 40,
    borderRadius: 22,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.primaryOrange,
  },
  playerName: {
    color: colors.primaryPink,
    textTransform: "capitalize",
    fontSize: 12,
    textAlign: "center",
  },
});

export default PlayerDetails;
