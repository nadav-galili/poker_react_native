import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import PageHeader from "./PageHeader";
import PlayerDetails from "./PlayerDetails";
import AppButton from "./AppButton";

function Team({ name, number, image, admin, players }) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          // alignContent: "flex-end",
          alignSelf: "center",
          // justifyContent: "flex-start",

          marginBottom: 10,
        }}
      >
        <Image
          source={require("../assets/newIcon.jpeg")}
          resizeMode="cover"
          style={styles.icon}
        />
        <PageHeader titleText="My Teams" />
      </View>
      <ImageBackground
        style={styles.team}
        source={require("../assets/casino.jpg")}
        blurRadius={4}
        resizeMode="cover"
      >
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
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
          <View style={styles.buttonContainer}>
            <AppButton title="Team Stats" />
            <AppButton title="Edit Games" color="primaryPurple" />
            <AppButton title="Edit Team" color="primaryOrange" />
            <AppButton title="Start A New Game" color="primaryPink" />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  admin: {
    color: colors.primaryPurple,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  buttonContainer: {
    padding: 20,
    width: "80%",
    alignSelf: "center",
    // backgroundColor: "#eae5e5",
    borderRadius: 15,
  },
  detailsContainer: {
    alignItems: "center",
    // flex: 1,
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
  icon: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    borderColor: colors.primaryPurple,
    borderWidth: 4,
  },
  image: {
    width: "30%",
    height: 100,
    borderRadius: 15,
    borderColor: colors.primaryBlue,
    borderWidth: 2,
  },
  name: {
    color: colors.white,
    fontWeight: "bold",
  },
  number: {
    color: colors.primaryBlue,
    fontWeight: "bold",
  },
  players: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
    width: "90%",
    alignSelf: "center",
    // backgroundColor: "rgba(0,0,0,0.5)",
  },

  team: {
    borderRadius: 55,
    marginBottom: 200,
    padding: 10,
    overflow: "hidden",
  },
});

export default Team;
