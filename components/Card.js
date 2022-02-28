import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
    //...props.style will overwrite any style from ...styles.card
  return <View style={{...styles.card, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    // width: 300, //adaptable par composant
    // maxWidth: "80%", //adaptable par composant
    // alignItems: "center", //adaptable par composant
    //Shadow properties only works on iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    //elevation property only works on ANDROID & does the same as Shadow
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
