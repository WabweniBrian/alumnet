import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

const AccountMainScreen = ({ navigation }) => {
  return (
    <ScrollView tw="mt-6 px-4">
      <View tw="flex-row gap-x-2 pb-4 border-b border-slate-300">
        <Image
          source={require("../../../../assets/images/avatar.png")}
          tw="w-20 h-20 rounded-full"
        />
        <View>
          <Text tw="text-2xl font-bold">Wabweni Brian</Text>
          <Text tw="text-base text-slate-500">wabwenib66@gmail.com</Text>
        </View>
      </View>
      <View tw="mt-8">
        <TouchableOpacity
          tw="flex-row gap-x-2"
          onPress={() => navigation.navigate("ProfileInfo")}
        >
          <FontAwesome name="user-circle-o" size={25} color="grey" />
          <Text tw="text-lg text-gray-500" style={{ fontFamily: "Questrial" }}>
            Your Profile Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          tw="flex-row gap-x-2 mt-6"
          onPress={() => navigation.navigate("ProfileSettings")}
        >
          <FontAwesome5 name="user-edit" size={25} color="grey" />
          <Text tw="text-lg text-gray-500" style={{ fontFamily: "Questrial" }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          tw="flex-row gap-x-2 mt-6"
          onPress={() => navigation.navigate("GeneralSettings")}
        >
          <FontAwesome name="cog" size={25} color="grey" />
          <Text tw="text-lg text-gray-500" style={{ fontFamily: "Questrial" }}>
            Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          tw="flex-row gap-x-2 mt-6"
          onPress={() => navigation.replace("Auth")}
        >
          <Feather name="log-out" size={25} color="grey" />
          <Text tw="text-lg text-gray-500" style={{ fontFamily: "Questrial" }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountMainScreen;
