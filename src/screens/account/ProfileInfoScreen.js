import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">ProfileInfoScreen</Text>
    </View>
  );
};

export default ProfileInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
