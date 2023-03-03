import { StyleSheet, Text, View } from "react-native";

const GroupsScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">GroupsScreen</Text>
    </View>
  );
};

export default GroupsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
