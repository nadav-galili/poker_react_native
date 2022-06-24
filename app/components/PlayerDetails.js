import React from "react";
import { Image, StyleSheet, View, TouchableHighlight } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function PlayerDetails({ image, name }) {
  return (
    <TouchableHighlight
      underlayColor={colors.light}
      onPress={() => console.log("sdsd")}
      style={styles.players}
    >
      <View style={styles.container}>
        <Image source={image} resizeMode="cover" style={styles.playerImage} />
        <AppText style={styles.playerName}>{name}</AppText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingEnd: 5,
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
    color: colors.white,
    textTransform: "capitalize",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default PlayerDetails;
