import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, ScrollView, View } from "react-native";
import { getAuth } from "firebase/auth";
import { storage, fireDB } from "../api/firebase";

// import { createStackNavigator } from "@react-navigation/stack";

import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Team from "../components/Team";
// import { query, where } from "firebase/firestore";

function MyTeams({ navigation }) {
  const [leagues, setLeagues] = useState([]);
  const [url, setUrl] = useState();

  const getLeagues = async () => {
    const auth = getAuth();
    const uid = auth.currentUser.uid;
    const user = fireDB.collection("users").doc(uid);
    const doc = await user.get();
    const leagueData = doc.data().leagues;
    console.log("llll", leagueData);
    const myLeagues = [];
    if (leagueData) {
      const leagueRef = fireDB
        .collection("leagues")
        .where("leagueNumber", "in", leagueData);
      const querySnapshot = await leagueRef.get();
      // console.log("querySnapshot", querySnapshot);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          doc.data().image = storage.ref(`/${uid}`).getDownloadURL();
          myLeagues.push(doc.data());
          console.log("myLeagues", myLeagues);
          setLeagues(myLeagues);
        });
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
        <View style={styles.noTeams}>
          <AppText style={styles.text}>No Leagues Yet...</AppText>
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
              image={require("../assets/poker_vasili.jpeg")}
              admin={league.leagueAdmin.nickName}
              players={league.players}
            />
          ))}
        {/* <Team
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
