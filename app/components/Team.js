import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import { storage } from "../api/firebase";

import AppText from "./AppText";
import colors from "../config/colors";
import PlayerDetails from "./PlayerDetails";
import AppButton from "./AppButton";
import Icon from "./Icon";
import Screen from "./Screen";
import InvitePlayers from "./InvitePlayers";

function Team({ name, number, image, admin, players }) {
  const [url, setUrl] = useState();
  const [modalVisible, setModalVisible] = useState(false);

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
            <AppText style={styles.playersHeader}>Players:</AppText>
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
          <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.AddPlayers}>
              <Icon
                name={"account-plus-outline"}
                backgroundColor={colors.primaryPurple}
              />
              <AppText style={styles.addPlayersText}>Add Players</AppText>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.buttonContainer}>
            <AppButton title="Team Stats" iconName="account-group" />
            <AppButton
              title="Start A New Game"
              color="primaryPink"
              iconName="poker-chip"
            />
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
          </View>
        </View>
        <Modal visible={modalVisible} animationType="slide">
          <Screen>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <InvitePlayers teamNumber={number} />
          </Screen>
        </Modal>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  AddPlayers: {
    marginLeft: 20,
  },
  addPlayersText: {
    color: colors.white,
    fontSize: 12,
  },
  admin: {
    color: colors.white,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  buttonContainer: {
    padding: 20,
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
  },
  detailsContainer: {
    alignItems: "center",
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
  },
  playersHeader: {
    color: colors.primaryPurple,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  team: {
    borderRadius: 55,
    marginBottom: 50,
    padding: 10,
    overflow: "hidden",
  },
});

export default Team;
