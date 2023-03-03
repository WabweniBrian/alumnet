import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FeedbackInquiryScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">FeedbackInquiryScreen</Text>
    </View>
  );
};

export default FeedbackInquiryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
