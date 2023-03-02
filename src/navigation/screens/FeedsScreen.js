import { View, Text } from "react-native";

const FeedsScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text
        onPress={() => navigation.navigate("Home")}
        className="text-3xl font-bold text-slate-700"
      >
        Feeds Screen
      </Text>
    </View>
  );
};

export default FeedsScreen;
