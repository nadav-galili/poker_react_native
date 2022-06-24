import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import Team from "../components/Team";
import AppIcon from "../components/AppIcon";
import colors from "../config/colors";

function MyTeams() {
  return (
    <ImageBackground
      source={require("../assets/17450.jpg")}
      style={{
        padding: 20,
        paddingTop: 40,
      }}
    >
      <AppIcon titleText="My Teams" />
      <Team
        name="poker @ vasili"
        number="535312"
        image={require("../assets/poker_vasili.jpeg")}
        admin="bibs"
        players={[
          { name: "rami", image: require("../assets/rami.png") },
          { name: "bibs", image: require("../assets/bibs.png") },
        ]}
      />
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
