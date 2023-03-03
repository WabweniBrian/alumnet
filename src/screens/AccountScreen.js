import { View, Text } from "react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text
        onPress={() => navigation.navigate("Home")}
        className="text-3xl font-bold text-slate-700"
      >
        Account Screen
      </Text>
    </View>
  );
};

export default AccountScreen;
