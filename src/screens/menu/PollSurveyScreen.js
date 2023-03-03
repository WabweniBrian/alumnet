import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PollSurveyScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">PollSurveyScreen</Text>
    </View>
  );
};

export default PollSurveyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
