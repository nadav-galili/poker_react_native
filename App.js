// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Team from "./app/components/Team";

export default function App() {
  // return <WelcomeScreen />;
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
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
});
