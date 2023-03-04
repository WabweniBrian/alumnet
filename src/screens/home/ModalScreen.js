import { StyleSheet, Text, View } from "react-native";

const ModalScreen = () => {
  return (
    <View style={styles.container}>
      <Text tw="text-3xl text-bold">ModalScreen</Text>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
