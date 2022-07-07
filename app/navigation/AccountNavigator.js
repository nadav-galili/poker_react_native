import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import instructionsScreen from "../screens/InstructionsScreen";
import MyTeamsScreen from "../screens/MyTeamsScreen";
import PersonalScreen from "../screens/PersonalScreen";
import JoinTeamScreen from "../screens/JoinTeamScreen";
import CreateTeamScreen from "../screens/CreateTeamScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Instructions" component={instructionsScreen} />
        <Stack.Screen name="MyTeams" component={MyTeamsScreen} />
        <Stack.Screen name="Personal" component={PersonalScreen} />
        <Stack.Screen name="Join" component={JoinTeamScreen} />
        <Stack.Screen name="CreateTeamScreen" component={CreateTeamScreen} />
</Stack.Navigator>

)
export default AccountNavigator;