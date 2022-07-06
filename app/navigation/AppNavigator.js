import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from '../screens/AccountScreen';
import MyTeams from '../screens/MyTeams';
import colors from '../config/colors';
import MyTeamsNavigator from './MyTeamsNavigator';


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
        {/* <Tab.Screen name="Welcome Screen" component={ MyTeamsNavigator} />  */}
        <Tab.Screen name="Account" component={ AccountScreen}    options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account-circle" size={size} color={color} />
        ),
      }} />
        <Tab.Screen name="My Teams" component={ MyTeams}   options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="cards-playing-diamond-multiple" size={size} color={color} />
        ),
      }} />
    </Tab.Navigator>
)
export default AppNavigator;