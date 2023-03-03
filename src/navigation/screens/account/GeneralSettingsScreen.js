import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GeneralSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">GeneralSettingsScreen</Text>
    </View>
  );
};

export default GeneralSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
