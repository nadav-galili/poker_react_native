import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primaryBlue", iconName }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={iconName} size={24} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: colors.primaryBlue,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddiing: 15,
    width: "100%",
    marginVertical: 10,
    height: 40,
    flexDirection: "row",
  },
  icon: {
    color: colors.white,
    paddingEnd: 10,
  },

  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
