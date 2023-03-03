import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MentorshipScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">MentorshipScreen</Text>
    </View>
  );
};

export default MentorshipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
