import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, ScrollView, View } from "react-native";
import { getAuth } from "firebase/auth";
import { storage, fireDB } from "../api/firebase";

import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Team from "../components/Team";

function MyTeams({ navigation }) {
  const [leagues, setLeagues] = useState([]);

  const getLeagues = async () => {
    const auth = getAuth();
    const uid = auth.currentUser.uid;
    const user = fireDB.collection("users").doc(uid);
    const doc = await user.get();
    const leagueData = doc.data().leagues;
    const myLeagues = [];
    if (leagueData) {
      const leagueRef = fireDB
        .collection("leagues")
        .where("leagueNumber", "in", leagueData);
      const querySnapshot = await leagueRef.get();
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          myLeagues.push(doc.data());
        });
        setLeagues(myLeagues);
      }
    }
  };

  useEffect(() => {
    getLeagues();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/17450.jpg")}
      style={styles.container}
    >
      <ScrollView>
        <AppIcon titleText="My Leagues" />
        <View style={styles.leagueContainer}>
          {leagues.length === 0 && (
            <AppText style={styles.text}>No Leagues Yet...</AppText>
          )}
          <AppButton
            title="Join A League"
            onPress={() => navigation.navigate("JoinLeagueScreen")}
          />
          <AppButton
            title="+Create A League"
            color="primaryPurple"
            onPress={() => navigation.navigate("CreateLeague")}
          />
        </View>
        {leagues.length > 0 &&
          leagues.map((league) => (
            <Team
              key={league.leagueNumber}
              name={league.leagueName}
              number={league.leagueNumber}
              image={league.leagueNumber}
              admin={league.leagueAdmin.nickName}
              players={league.players}
            />
          ))}
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
