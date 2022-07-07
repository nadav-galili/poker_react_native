import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyTeamsScreen from "../screens/MyTeamsScreen";

const Stack = createStackNavigator();

const MyTeamsNavigator = () => (
    <Stack.Navigator>
  <Stack.Screen name="MyTeamsScreen" component={MyTeamsScreen} />
    </Stack.Navigator>
)

export default MyTeamsNavigator;