import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignInScreen from "../screens/SignInScreen";
// import AccountScreen from "../screens/AccountScreen";
import MyTeamsScreen from "../screens/MyTeamsScreen";

import navigationTheme from "./navigationTheme";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="SignInScreen" component={SignInScreen} />
    <Stack.Screen name="MyTeamsScreen" component={MyTeamsScreen} />
    {/* <Stack.Screen name="AccountScreen" component={AccountScreen} /> */}
  </Stack.Navigator>
);

export default AuthNavigator;
