// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Team from "./app/components/Team";
import colors from "./app/config/colors";

export default function App() {
  // return <WelcomeScreen />;
  return (
    <View
      style={{
        backgroundColor: "#eae5e5",
        padding: 20,
        paddingTop: 40,
        // paddingBottom: 200,
      }}
    >
      <Team
        name="poker @ vasili"
        number="53312"
        image={require("./app/assets/poker_vasili.jpeg")}
        admin="bibs"
        players={[
          { name: "rami", image: require("./app/assets/rami.png") },
          { name: "bibs", image: require("./app/assets/bibs.png") },
          { name: "vasil", image: require("./app/assets/vasil.png") },
          { name: "shikor", image: require("./app/assets/shikor.png") },
          { name: "dan", image: require("./app/assets/dan.jpg") },
          { name: "barvaz", image: require("./app/assets/barvaz.jpg") },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    // width: "10%",
    height: 90,
    width: 90,
    borderRadius: 15,
    alignSelf: "center",
  },
});
