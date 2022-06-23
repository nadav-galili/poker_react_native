import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function PageHeader({ titleText }) {
  return <Text style={styles.titleText}>{titleText}</Text>;
}

const styles = StyleSheet.create({
  titleText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 22,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default PageHeader;
