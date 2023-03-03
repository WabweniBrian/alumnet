import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AnnouncementsScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">AnnouncementsScreen</Text>
    </View>
  );
};

export default AnnouncementsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
