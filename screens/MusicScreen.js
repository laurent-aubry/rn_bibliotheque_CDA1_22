import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import CardList from "../components/CardList";
// import SearchBox from "../components/SearchBox";

const MusicScreen = ({navigation}) => {
  const [musiques, setMusiques] = useState([]);
  // const [searchField, setSearchField] = useState("");
  // const [searchFieldAuteur, setSearchFieldAuteur] = useState("");

  useEffect(() => {
    const getOeuvres = async () => {
      try {
        const response = await fetch(
          // "http://localhost:5000/api/musiques"
          "https://greta-bibliotheque-cda121.herokuapp.com/api/musiques"
        );
        const json = await response.json();
        setMusiques(json.musiques);
      } catch (err) {
        console.log(err);
      }
    };
    getOeuvres();
  }, []);

  const itemDeleteHandler = (deleteItemId) => {
    setMusiques((prevMusiques) =>
      prevMusiques.filter((musique) => musique.id !== deleteItemId)
    );
  };

  //Filtre les éléments selon ce qui est saisie dans searchField

  return (
    <View style={styles.container}>
      <Text>Musics screen</Text>
      {/* <View style={styles.searchBoxes}>
        <SearchBox onSearch={onSearchChange} message="Rechercher un titre" />
        <SearchBox
          onSearch={onSearchAuteurChange}
          message="Rechercher un auteur"
        />
      </View> */}
      <CardList
        oeuvres={musiques}
        onDeleteItem={itemDeleteHandler}
        myRoute="musiques"
        navigation
      ></CardList>
    </View>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // searchBoxes: {
  //   flexDirection: "row",
  // },
});
