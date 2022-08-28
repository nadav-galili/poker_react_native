import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyTeamsScreen from "../screens/MyTeamsScreen";
import CreateLeagueScreen from "../screens/CreateLeagueScreen";

const Stack = createStackNavigator();

const MyTeamsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="MyTeams" component={MyTeamsScreen} />
    <Stack.Screen name="CreateLeague" component={CreateLeagueScreen} />
  </Stack.Navigator>
);
export default MyTeamsNavigator;
