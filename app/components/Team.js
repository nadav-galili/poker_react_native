import React, { useState } from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { storage } from "../api/firebase";

import AppText from "./AppText";
import colors from "../config/colors";
import PlayerDetails from "./PlayerDetails";
import AppButton from "./AppButton";

function Team({ name, number, image, admin, players }) {
  const [url, setUrl] = useState();
  const imageRef = storage.ref(`leagues/${image}`);
  imageRef.getDownloadURL().then((url) => setUrl(url));
  return (
    <>
      <ImageBackground
        style={styles.team}
        source={require("../assets/casino.jpg")}
        blurRadius={4}
      >
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            paddingTop: 10,
          }}
        >
          <View style={styles.detailsContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: url }}
              style={styles.image}
            />
            <AppText style={styles.name}>Team Name: {name}</AppText>
            <AppText style={styles.number}>Team Number: {number}</AppText>
            <AppText style={styles.admin}>Admin: {admin}</AppText>
          </View>

          <View style={styles.players}>
            {players &&
              players.map((player) => (
                <PlayerDetails
                  key={player.uid}
                  image={player.uid}
                  name={player.nickName}
                />
              ))}
          </View>
          <View style={styles.buttonContainer}>
            <AppButton title="Team Stats" iconName="account-group" />
            <AppButton
              title="Edit Games"
              color="primaryPurple"
              iconName="playlist-edit"
            />
            <AppButton
              title="Edit Team"
              color="primaryOrange"
              iconName="shield-edit"
            />
            <AppButton
              title="Start A New Game"
              color="primaryPink"
              iconName="poker-chip"
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  admin: {
    color: colors.white,
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
    height: 90,
    width: 90,
    borderRadius: 45,
    marginRight: 10,
    borderColor: colors.white,
    borderWidth: 2,
    alignContent: "center",
    alignSelf: "center",
  },
  image: {
    width: "30%",
    height: 100,
    borderRadius: 15,
    borderColor: colors.primaryBlue,
    borderWidth: 2,
  },
  name: {
    color: colors.primaryBlue,
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
    marginBottom: 50,
    padding: 10,
    overflow: "hidden",
  },
});

export default Team;
