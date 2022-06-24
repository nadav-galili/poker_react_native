import React from "react";
import { StyleSheet, View, FlatList, ImageBackground } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import colors from "../config/colors";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "How To Play",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primaryBlue,
    },
  },
  {
    title: "My Teams",
    icon: {
      name: "account-group-outline",
      backgroundColor: colors.primaryPurple,
    },
  },
  {
    title: "Personal Stats & Profile",
    icon: {
      name: "account-outline",
      backgroundColor: colors.primaryOrange,
    },
  },
  {
    title: "Join An Existing Team",
    icon: {
      name: "plus-box",
      backgroundColor: colors.primaryPurple,
    },
  },
  {
    title: "Create A New Team",
    icon: {
      name: "creation",
      backgroundColor: colors.primaryPink,
    },
  },
  // {
  //   title: "My Messages",
  //   icon: {
  //     name: "email",
  //     backgroundColor: colors.primaryPink,
  //   },
  // },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ImageBackground
        style={styles.screen}
        source={require("../assets/17450.jpg")}
      >
        <View style={styles.container}>
          <ListItem
            title="Barvaz"
            subTitle="merellaw@gmail.com"
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
              />
            )}
          />
        </View>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
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
