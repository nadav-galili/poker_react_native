import React, { useState } from "react";
import { StyleSheet, ImageBackground, ScrollView, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Team from "../components/Team";
import navigationTheme from "../navigation/navigationTheme";

function MyTeams({ navigation }) {
  const [teams, setTeams] = useState([]);

  return (
    <ImageBackground
      source={require("../assets/17450.jpg")}
      style={styles.container}
    >
      <ScrollView>
        <AppIcon titleText="My Leagues" />
        <View style={styles.noTeams}>
          <AppText style={styles.text}>No Leagues Yet...</AppText>
          <AppButton
            title="Join A League"
            onPress={() => navigation.navigate("JoinTeamScreen")}
          />
          <AppButton
            title="+Create A League"
            color="primaryPurple"
            onPress={() => navigation.navigate("CreateLeague")}
          />
        </View>
        {/* <Team
          name="poker @ vasili"
          number="535312"
          image={require("../assets/poker_vasili.jpeg")}
          admin="bibs"
          players={[
            { name: "diamondsssss", image: require("../assets/rami.png") },
            { name: "bibs", image: require("../assets/bibs.png") },
          ]}
        />
        <Team
          name="givataim"
          number="55544"
          image={require("../assets/38.jpg")}
          admin="bibs"
          players={[
            { name: "rami", image: require("../assets/rami.png") },
            { name: "rami", image: require("../assets/rami.png") },
            { name: "rami", image: require("../assets/rami.png") },
            { name: "bibs", image: require("../assets/bibs.png") },
          ]}
        /> */}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: colors.white,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
});

export default MyTeams;

// { name: "vasil", image: require("../assets/vasil.png") },
// { name: "shikor", image: require("../assets/shikor.png") },
// { name: "dan", image: require("../assets/dan.jpg") },
// { name: "barvaz", image: require("../assets/barvaz.jpg") },
