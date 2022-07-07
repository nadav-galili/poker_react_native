import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import instructionsScreen from "../screens/InstructionsScreen";
import MyTeamsScreen from "../screens/MyTeamsScreen";
const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Instructions" component={instructionsScreen} />
        <Stack.Screen name="MyTeams" component={MyTeamsScreen} />
        {/* <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Account" component={AccountScreen} /> */}
</Stack.Navigator>

)
export default AccountNavigator;