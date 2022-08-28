import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";

function LoadingScreen(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LoadingScreen;
