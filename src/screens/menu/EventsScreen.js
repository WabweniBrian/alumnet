import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EventsScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">EventsScreen</Text>
    </View>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
