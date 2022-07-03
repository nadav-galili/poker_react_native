import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
        tabBarInactiveTintColor: colors.primaryBlue,
        headerShown: false,
        }}
    >
        <Tab.Screen name="Welcome Screen" component={ MyTeamsNavigator} /> 
        <Tab.Screen name="Account Screen" component={ AccountScreen} />
        <Tab.Screen name="My Teams" component={ MyTeams} />
    </Tab.Navigator>
)
export default AppNavigator;