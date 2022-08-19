import React, { useState } from "react";
import { StyleSheet, ImageBackground, ScrollView } from "react-native";

import AppIcon from "../components/AppIcon";
import Team from "../components/Team";
import teamsApi from "../api/teams";

function MyTeams() {
  const [teams, setTeams] = useState([]);

  return (
    <ImageBackground
      source={require("../assets/17450.jpg")}
      style={{
        padding: 20,
        paddingTop: 40,
      }}
    >
      <ScrollView>
        <AppIcon titleText="My Teams" />
        <Team
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
        />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyTeams;

// { name: "vasil", image: require("../assets/vasil.png") },
// { name: "shikor", image: require("../assets/shikor.png") },
// { name: "dan", image: require("../assets/dan.jpg") },
// { name: "barvaz", image: require("../assets/barvaz.jpg") },
