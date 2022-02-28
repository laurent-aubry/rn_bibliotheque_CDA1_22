import { StyleSheet, View, Button } from "react-native";
import React from "react";
import Input from "./Input";

const SearchBox = (props) => {

  return (
    <View style={styles.searchitem}>
      <Input
        type="search"
        placeholder={props.message}
        onChangeText={(e) => {props.onSearch(e)}}
      ></Input>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchitem: {
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  buttonItem: {
    width: 100,
  },
});
