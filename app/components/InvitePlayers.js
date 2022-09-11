import React from "react";
import { View, Text } from "react-native";

function InvitePlayers({ teamNumber }) {
  return (
    <View>
      <Text>Invite Your Friends</Text>
      <Text>League Code</Text>
      <Text>Your friends can use this code to join your league</Text>
      <Text>{teamNumber}</Text>
    </View>
  );
}
export default InvitePlayers;
