import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">ProfileSettingsScreen</Text>
    </View>
  );
};

export default ProfileSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
