import * as Font from "expo-font";
 
const  useFonts = async () =>
  await Font.loadAsync({
    //fct qui permet de charger un Font. Elle doit retourner une promise
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

export default useFonts;
