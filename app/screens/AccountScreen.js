import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ImageBackground } from "react-native";
import { auth } from "../api/firebase";

import AuthNavigator from "../navigation/AuthNavigator";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import WelcomeScreen from "./WelcomeScreen";

const menuItems = [
  {
    title: "How To Play",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primaryBlue,
    },
    targetScreen: routes.INSTRUCTIONS_SCREEN,
  },
  // {
  //   title: "My Teams",
  //   icon: {
  //     name: "account-group-outline",
  //     backgroundColor: colors.primaryPurple,
  //   },
  //   targetScreen: routes.MY_TEAMS,
  // },
  {
    title: "Personal Stats & Profile",
    icon: {
      name: "account-outline",
      backgroundColor: colors.primaryOrange,
    },
    targetScreen: routes.PERSONAL_STATS,
  },
  // {
  //   title: "Join An Existing Team",
  //   icon: {
  //     name: "plus-box",
  //     backgroundColor: colors.primaryPurple,
  //   },
  //   targetScreen:routes.JOIN_TEAM
  // },
  // {
  //   title: "Create A New Team",
  //   icon: {
  //     name: "creation",
  //     backgroundColor: colors.primaryPink,
  //   },
  //   targetScreen:routes.CREATE_TEAM
  // },

  // {
  //   title: "My Messages",
  //   icon: {
  //     name: "email",
  //     backgroundColor: colors.primaryPink,
  //   },
  // },
];

function AccountScreen({ navigation, screen, user }) {
  // const [user, setUser] = useState(true);
  const [userData, setUserData] = useState(null);

  console.log("qqqqq", user);
  const logOut = async () => {
    const signOut = await auth.signOut();
    console.log("signOut", signOut);
    // !signOut ? setUser(false) : setUser(true);
    // !user ? navigation.navigate("Welcome") : "";
    navigation.navigate("Welcome");
  };
  return (
    <Screen style={styles.screen}>
      <ImageBackground
        style={styles.screen}
        source={require("../assets/17450.jpg")}
      >
        <View style={styles.container}>
          <ListItem
            title="Barvaz"
            subTitle={auth.currentUser ? auth.currentUser.email : "no user"}
            image={require("../assets/barvaz.jpg")}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ListItemSeparatorComponent}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            )}
          />
        </View>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          onPress={logOut}
        />
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primaryBlue,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
