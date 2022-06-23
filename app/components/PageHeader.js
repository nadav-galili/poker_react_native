import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function PageHeader({ titleText }) {
  return <Text style={styles.titleText}>{titleText}</Text>;
}

const styles = StyleSheet.create({
  titleText: {
    color: colors.primaryBlue,
    fontWeight: "700",
    fontSize: 38,
    // textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default PageHeader;