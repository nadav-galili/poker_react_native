// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { auth } from "./app/api/firebase";
import "./app/api/firebase"; // Import the Firebase API configuration file
// import firebase from "firebase";
// import {
//   API_KEY,
//   AUTH_DOMAIN,
//   DATABASE_URL,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   MESSAGE_SENDER_ID,
//   APP_ID,
//   MEASUREMENT_ID,
// } from "@env";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Team from "./app/components/Team";
import colors from "./app/config/colors";
import MyTeamsScreen from "./app/screens/MyTeamsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignInScreen from "./app/screens/SignInScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={
      {
        // headerStyle: { backgroundColor: colors.primaryPurple },
        // headerTintColor: colors.white,
        // headerShown: false,
      }
    }
  >
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="SignInScreen" component={SignInScreen} />
    <Stack.Screen
      name="AccountScreen"
      component={AccountScreen}
      screen={WelcomeScreen}
    />
    <Stack.Screen name="MyTeamsScreen" component={MyTeamsScreen} />
    {/* <Stack.Screen name="MyTeams" component={MyTeams} options={({route})=>({title:route.params.id})} /> */}
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={{
//       tabBarActiveBackgroundColor: colors.primaryPurple,
//       tabBarActiveTintColor: "white",
//       tabBarInactiveTintColor: colors.primaryBlue,
//       headerShown: false,
//     }}
//   >
//     <Tab.Screen
//       name="Home"
//       component={AccountScreen}
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons name="home" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="My Teams"
//       component={MyTeamsScreen}
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons
//             name="account-group"
//             size={size}
//             color={color}
//           />
//         ),
//       }}
//     />
//     {/* todo-my account screen */}
//     <Tab.Screen
//       name="Login"
//       component={WelcomeScreen}
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons name="poker-chip" size={size} color={color} />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );
export default function App() {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLogged(user);
      } else {
        setLogged(false);
        console.log("no user");
      }
    });
    return unsubscribe;
  }, [logged]);

  return (
    <NavigationContainer theme={navigationTheme}>
      {/* if user not logged in -render authnavigator, 
    if islogged in render app navigator */}
      {!logged ? <AuthNavigator /> : <AppNavigator user={logged} />}
    </NavigationContainer>
  );
}
