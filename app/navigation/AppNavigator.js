import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import MyTeamsScreen from "../screens/MyTeamsScreen";
import colors from "../config/colors";
import MyTeamsNavigator from "./MyTeamsNavigator";
import AccountNavigator from "./AccountNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: colors.primaryPurple,
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: colors.medium,
      headerShown: false,
    }}
  >
    {/* <Tab.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
    <Tab.Screen
      name="My Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account-circle"
            size={size}
            color={color}
          />
        ),
      }}
      // user={user}
    />
    <Tab.Screen
      name="My Teams"
      component={MyTeamsScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="cards-playing-diamond-multiple"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
export default AppNavigator;
