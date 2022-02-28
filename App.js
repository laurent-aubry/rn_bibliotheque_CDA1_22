import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import useFonts from "./hooks/useFonts";
import AppLoading from "expo-app-loading"; //permet de charger le Font complètement avant le 1er render

import HomeScreen from "./screens/HomeScreen";
import MusicScreen from "./screens/MusicScreen";
import FilmScreen from "./screens/FilmScreen";
// import NewItemScreen from "./screens/NewItemScreen";
// import UpdateItemScreen from "./screens/UpdateItemScreen";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!dataLoaded) {
    //Attends que fetchFonts a terminé de charger
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <NavigationContainer >
      {/* <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
          <Stack.Screen name="Music" component={MusicScreen} options={{ title: 'Musiques' }}

          />
          <Stack.Screen name="Film" component={FilmScreen} options={{ title: 'Films' }} />
          <Stack.Screen name="NewItem" component={NewItemScreen} options={{ title: 'Nouveau' }} />
          <Stack.Screen name="UpdateItem" component={UpdateItemScreen} options={{ title: 'MAJ' }} />

      </Stack.Navigator> */}
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Musiques") {
            iconName = focused ? "musical-notes" : "musical-notes-outline";
          } else if (route.name === "Films") {
            iconName = focused ? "film" : "film-outline";
          } else if (route.name === "A propos") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Jeux vidéo") {
            iconName = focused
              ? "ios-game-controller"
              : "ios-game-controller-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
      <Tab.Screen name="Music" component={MusicScreen} options={{ title: 'Musiques' }} />
      <Tab.Screen name="Film" component={FilmScreen} />
      {/* <Tab.Screen name="A propos" component={AProposScreen} /> */}
    </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});
