import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import PageHeader from "./PageHeader";

function Team({ name, number, image, admin, players }) {
  return (
    <>
      <PageHeader titleText="My Teams" />
      <View style={styles.team}>
        <View style={styles.detailsContainer}>
          <Image resizeMode="contain" source={image} style={styles.image} />
          <AppText style={styles.name}>Team Name: {name}</AppText>
          <AppText style={styles.number}>Team Number: {number}</AppText>
          <AppText style={styles.admin}>Admin: {admin}</AppText>
        </View>
        <View style={styles.players}>
          <Image
            source={players[0].image}
            resizeMode="cover"
            style={styles.playerImage}
          />
          <AppText style={styles.playerName}>{players[0].name}</AppText>
          <Image
            source={players[1].image}
            resizeMode="cover"
            style={styles.playerImage}
          />
          <AppText style={styles.playerName}>{players[1].name}</AppText>
          <Image
            source={players[2].image}
            resizeMode="cover"
            style={styles.playerImage}
          />
          <AppText style={styles.playerName}>{players[2].name}</AppText>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  admin: {
    color: colors.primaryPink,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  detailsContainer: {
    alignItems: "center",
  },
  image: {
    width: "30%",
    height: 100,
    borderRadius: 15,
  },
  name: {
    color: colors.white,
    fontWeight: "bold",
  },
  number: {
    color: colors.white,
    fontWeight: "bold",
  },
  players: {
    // width: "20%",
  },
  playerImage: {
    height: 40,
    width: 40,
    borderRadius: 22,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.black,
    //  width: "30%",
    // borderColor: colors.primaryBlue,
  },
  playerName: {
    color: colors.primaryPink,
    textTransform: "capitalize",
  },
  team: {
    borderRadius: 15,
    backgroundColor: colors.primaryBlue,
    marginBottom: 20,
    padding: 20,
  },
});

export default Team;
