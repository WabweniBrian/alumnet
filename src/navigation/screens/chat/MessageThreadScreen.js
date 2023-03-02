import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MessageThreadScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">MessageThreadScreen</Text>
    </View>
  );
};

export default MessageThreadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
