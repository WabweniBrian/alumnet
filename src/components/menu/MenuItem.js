import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MenuItem = ({ title, route, icon }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(`${route}`)}>
      <View tw="flex-row items-center gap-x-2 my-4">
        <View tw="bg-slate-300 rounded-full w-10 h-10 justify-center items-center">
          <Image source={icon} tw="w-6 h-6" />
        </View>
        <Text tw="text-lg" style={{ fontFamily: "Questrial" }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
