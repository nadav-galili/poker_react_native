import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import PageHeader from "./PageHeader";
import PlayerDetails from "./PlayerDetails";

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
          <PlayerDetails image={players[0].image} name={players[0].name} />
          <PlayerDetails image={players[1].image} name={players[1].name} />
          <PlayerDetails image={players[2].image} name={players[2].name} />
          <PlayerDetails image={players[3].image} name={players[3].name} />
          <PlayerDetails image={players[4].image} name={players[4].name} />
          <PlayerDetails image={players[5].image} name={players[5].name} />
          <PlayerDetails image={players[5].image} name={players[5].name} />
          <PlayerDetails image={players[5].image} name={players[5].name} />
          <PlayerDetails image={players[5].image} name={players[5].name} />
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
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
    // width: "20%",
  },

  team: {
    borderRadius: 15,
    backgroundColor: colors.primaryBlue,
    marginBottom: 20,
    padding: 20,
  },
});

export default Team;
