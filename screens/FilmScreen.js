import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FilmScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Films screen</Text>
    </View>
  )
}

export default FilmScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
})