import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import Header from "../components/Header";
import MainButton from "../components/MainButton";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const HomeScreen = ({navigation} ) => {
  return (
    <View style={styles.container}>
      <Header title="Bienvenue au Greta" />
      <Text></Text>
      <View style={styles.menuList}>
        <MainButton onPress={() => {navigation.navigate('Music')}}>
          <MaterialCommunityIcons
            name="music-box-outline"
            size={24}
            color="black"
          />
        </MainButton>
        <MainButton onPress={() => {navigation.navigate('Film')}}>
          <FontAwesome name="file-movie-o" size={24} color="black" />
        </MainButton>
        {/* <MainButton onPress={() => {navigation.push('NewItem')}}>
          <FontAwesome name="file-movie-o" size={24} color="black" />
        </MainButton> */}
        <StatusBar style="auto" />
      </View>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  menuList: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
});
