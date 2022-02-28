import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import React from "react";
import MainButton from "./MainButton";
import Card from "./Card";
import { AntDesign } from "@expo/vector-icons";


const CardItem = ( { myRoute, oeuvre, onDelete}) => {
  const navigation = useNavigation();

  const confirmDeleteHandler = async () => {
    try {
      const response = await fetch(
        `https://greta-bibliotheque-cda121.herokuapp.com/api/${myRoute}/${oeuvre.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        onDelete(oeuvre.id);
        navigation.navigate('Music');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card>
      <View style={styles.imageContainer}>
        <Image
          //   fadeDuration={1000}
          source={{
            uri: oeuvre.imageUrl,
          }}
          style={styles.image}
          //   resizeMode="cover"
        />
      </View>
      <Text>{oeuvre.titre}</Text>
      <Text>
        {oeuvre.auteur} - {oeuvre.annee}
      </Text>
      <View style={styles.menuList}>
        <MainButton title="Supprimer" onPress={confirmDeleteHandler}>
          <AntDesign name="delete" size={24} color="black" />
        </MainButton>
        <MainButton title="Editer" 
                onPress={() => {
                  navigation.navigate('UpdateItem'
                  , {
                    oeuvreId: oeuvre.id,
                    titre: oeuvre.titre,
                    annee: oeuvre.annee,
                    auteur: oeuvre.auteur,
                    imageUrl: oeuvre.imageUrl,
                    myRoute: 'musiques',
                  });
                }}
        >
        <AntDesign name="edit" size={24} color="black" />
        </MainButton>
      </View>
    </Card>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    // borderRadius: 150, // doit être égal à 0.5X width / height pour un cercle parfait
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  menuList: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
