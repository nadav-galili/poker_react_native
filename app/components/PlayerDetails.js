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

    padding: 5,
  },
  playerImage: {
    height: 40,
    width: 40,
    borderRadius: 22,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.primaryYellow,
    backgroundColor: colors.primaryOrange,
  },
  playerName: {
    color: colors.primaryPink,
    textTransform: "capitalize",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default PlayerDetails;