import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MeetingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">MeetingsScreen</Text>
    </View>
  );
};

export default MeetingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
