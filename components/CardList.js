import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";
import CardItem from "./CardItem";

const CardList = ({navigation, oeuvres, myRoute, onDeleteItem}) => {
  const renderItem = ({ item }) => (
    <CardItem oeuvre={item} onDelete={onDeleteItem} myRoute={myRoute} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={oeuvres}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
