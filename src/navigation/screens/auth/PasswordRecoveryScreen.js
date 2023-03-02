import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PasswordRecoveryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">PasswordRecoveryScreen</Text>
      <Text onPress={() => navigation.goBack()}>Go back</Text>
    </View>
  );
};

export default PasswordRecoveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
