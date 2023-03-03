import { View, Text } from "react-native";
import Feeds from "../components/feeds/Feeds";

const FeedsScreen = ({ navigation }) => {
  return (
    <View>
      <Text
        onPress={() => navigation.navigate("Home")}
        className="text-3xl font-bold text-slate-700"
      ></Text>
      <Feeds />
    </View>
  );
};

export default FeedsScreen;
