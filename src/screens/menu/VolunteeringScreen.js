import { StyleSheet, Text, View } from "react-native";
import React from "react";

const VolunteeringScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">VolunteeringScreen</Text>
    </View>
  );
};

export default VolunteeringScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
