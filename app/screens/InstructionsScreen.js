import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import AppIcon from '../components/AppIcon';
 function Instructions(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
         <AppIcon titleText="Instuctions" />
      <Text>How To Play {"\n"}{"\n"}
        This App was created to track live home poker games{"\n"}
        and display statistics for your team and also personal stats.{"\n"}
        use this app each time you play a live game with your friends {"\n"}
        and track each time a player cashes in.{"\n"}
        at the end of the game you can see the each player's total profit, cashing ammount, number of cashing {"\n"}
        and more stats about the games your team played.{"\n"}
        you can open or join as many teams as you like and see each team stats separately.
        {"\n"}{"\n"} 
        1.if you dont have a team yet,go to Account Tab  {"\n"}
        at the bottom navbar and join an existing team
        of your friends or create a new team and invite your friends to join. {"\n"}{"\n"}
        2.if you have a team,go to My Teams Tab, {"\n"}
        select a team , and choose one of the options.{"\n"}
        if you want to start a game , click on Start Game. {"\n"}{"\n"}

        3.choose the players from your team that will play this game (min 2 players). {"\n"}
        * you can also add players after the game started. {"\n"}
        click on "Add Cashing" for each player that cashes in.{"\n"}
        repeat this every time a player cashes in and gets chips.{"\n"}
        4.when you decide to end the game, fill in the text box the ammount of chips each player {"\n"}
        has 

      
        </Text>
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
}
});

export default Instructions;