// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Team from "./app/components/Team";
import colors from "./app/config/colors";
import MyTeams from "./app/screens/MyTeams";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return <AccountScreen />;
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
