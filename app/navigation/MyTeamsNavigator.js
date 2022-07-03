import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyTeams from "../screens/MyTeams";

const Stack = createStackNavigator();

const MyTeamsNavigator = () => (
    <Stack.Navigator>
  <Stack.Screen name="My Teams" component={MyTeams} />
    </Stack.Navigator>
)

export default MyTeamsNavigator;