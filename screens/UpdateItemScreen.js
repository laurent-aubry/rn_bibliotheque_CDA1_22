import React from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller, set } from "react-hook-form";
import Constants from "expo-constants";
import Colors from "../constants/colors";

const UpdateItemScreen = ({ navigation, route }, props) => {

  const { oeuvreId, titre, annee, auteur, imageUrl, myRoute } = route.params;

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      titre: titre,
      annee: annee,
      auteur: auteur,
      imageUrl: imageUrl,
      // "https://img.filmsactu.net/datas/fiches/c/o/comedie/xl/comedie-5f089739e263a.jpg",
    },
  });
  const onSubmit = async (data) => {
    // console.log(data);
    async function addData() {
      try {
        await fetch(
          `https://greta-bibliotheque-cda121.herokuapp.com/api/${myRoute}/${oeuvreId}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              titre: data.titre,
              annee: data.annee,
              auteur: data.auteur,
              imageUrl: data.imageUrl,
            }),
          }
        );
      } catch (err) {
        console.log(err.message);
      }
      //navigation.push(`/${props.route}`);
      if (myRoute === "musiques") {
        navigation.push(`Music`);
      } else {
        navigation.push(`Film`);
      }
    }
    addData();
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  // console.log('errors', errors);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Titre</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="titre"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Année</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="annee"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Auteur</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="auteur"
        rules={{ required: true }}
      />
      <Text style={styles.label}>URL de l'image</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="imageUrl"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Valider"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default UpdateItemScreen;

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    width: "80%",
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: Colors.secondary,
  },
  input: {
    backgroundColor: "white",
    // borderColor: "none",
    height: 40,
    padding: 10,
    borderRadius: 4,
    width: "80%",
  },
});
