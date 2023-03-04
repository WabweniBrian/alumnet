import { View, Text, Image } from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <View>
        <Image
          source={require("../../../assets/alumnet.png")}
          alt="Equity logo"
        />
        <Text className="text-3xl font-bold text-slate-700">Home Screen</Text>
        <View className="bg-primary py-2 items-center rounded-md mt-6 px-4">
          <Text
            className="uppercase text-white font-medium"
            style={{ fontFamily: "Questrial" }}
            onPress={() => alert("This is the home screen")}
          >
            get started
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
