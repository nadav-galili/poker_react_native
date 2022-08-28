import React from "react";
import { View, StyleSheet, Image } from "react-native";

import PageHeader from "./PageHeader";

function AppIcon({ titleText }) {
  return (
    <View
      style={{
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 20,
      }}
    >
      <Image
        source={require("../assets/newIcon.jpeg")}
        resizeMode="cover"
        style={styles.icon}
      />

      <PageHeader titleText={titleText} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginRight: 10,
    borderColor: "gold",
    borderWidth: 2,
    alignContent: "center",
    alignSelf: "center",
  },
});

export default AppIcon;
