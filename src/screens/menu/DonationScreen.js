import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DonationScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">DonationScreen</Text>
    </View>
  );
};

export default DonationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
