import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ImageBackground } from "react-native";
import { auth, fireDB, storage } from "../api/firebase";
import { doc, getDoc } from "firebase/firestore";

import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

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
  //   title: "My Messages",
  //   icon: {
  //     name: "email",
  //     backgroundColor: colors.primaryPink,
  //   },
  // },
];

function AccountScreen({ navigation, screen }) {
  const [userData, setUserData] = useState({});
  const [url, setUrl] = useState();

  const logOut = async () => {
    await auth.signOut();
    navigation.navigate("Welcome");
  };

  const fetchUserDetails = () => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(fireDB, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const imageRef = await storage.ref(`/${user.uid}`).getDownloadURL();
          setUserData(docSnap.data());
          setUrl(imageRef);
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("no user");
      }
    });
    unsubscribe();
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <Screen style={styles.screen}>
      <ImageBackground
        style={styles.screen}
        source={require("../assets/17450.jpg")}
      >
        <View style={styles.container}>
          <ListItem
            title={userData?.nickName}
            subTitle={userData?.email}
            image={{
              uri: url,
            }}
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
    flex: 1,
  },
  container: {
    marginVertical: 40,
    marginTop: 0,
  },
});

export default AccountScreen;
