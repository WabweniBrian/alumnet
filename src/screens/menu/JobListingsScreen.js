import { StyleSheet, Text, View } from "react-native";
import React from "react";

const JobListingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">JobListingsScreen</Text>
    </View>
  );
};

export default JobListingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
