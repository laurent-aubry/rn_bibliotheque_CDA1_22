import { StyleSheet, View, Button } from "react-native";
import React from "react";
import Input from "./Input";
import Colors from "../constants/colors";

const SearchBox = (props) => {
  // const [enteredValue, setEnteredValue] = useState("");

  // const textInputHandler = (inputText) => {
  //   setEnteredValue(inputText);
  //   props.onSearch(inputText);
  // };

  // const resetInputHandler = () => {
  //   setEnteredValue("");
  // };

  // const confirmInputHandler = () => {
  //   // if (enteredValue.length === 0) {
  //   //   Alert.alert("Saisie invalide !", "Doit être au format texte", [
  //   //     { text: "Ok", style: "destructive", onPress: resetInputHandler },
  //   //   ]);
  //   //   return;
  //   // }
  //   Keyboard.dismiss();
  //   console.log(enteredValue);
  //   props.onSearch(enteredValue);
  // };

  return (
    <View style={styles.searchitem}>
      <Input
        type="search"
        placeholder={props.message}
        onChangeText={(e) => {props.onSearch(e)}}
        // style={styles.input}
        // blurOnSubmit
        // autoCapitalize="none"
        // autoCorrect={false}
        // keyboardType="number-pad"
        // maxLength={2}
        // onChangeText={(e) => {textInputHandler(e)}}
        // value={enteredValue}
      ></Input>
      {/* <View style={styles.buttonContainer}>
        <View style={styles.buttonItem}>
          <Button
            title="Confirm"
            onPress={confirmInputHandler}
            color={Colors.primary}
          />
        </View>
      </View> */}
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
