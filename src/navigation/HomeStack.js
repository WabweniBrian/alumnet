import HomeTabs from "./HomeTabs";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import ModalScreen from "../screens/home/ModalScreen";
import MessageThreadScreen from "../screens/chat/MessageThreadScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        StackBarShowLabel: false,
        StackBarStyle: {
          height: 60,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="HomeRoot"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="MessageThread"
          component={MessageThreadScreen}
          options={{
            headerTitle: () => null,
            headerStyle: {
              backgroundColor: "#982529",
            },
            headerTintColor: "#fff",
            headerLeft: () => (
              <View tw="flex-row items-center gap-2 pl-2">
                <TouchableOpacity
                  onPress={() => navigation.navigate("RootChat")}
                >
                  <Feather name="chevron-left" size={25} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity tw="flex-row items-center gap-x-1">
                  <Image
                    source={{
                      uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
                    }}
                    tw="w-8 h-8 rounded-full"
                  />
                  <View>
                    <Text
                      tw="font-bold text-white"
                      style={{ fontFamily: "Questrial" }}
                    >
                      Wabz Braize
                    </Text>
                    <Text
                      tw="text-xs text-green-500 font-semibold"
                      style={{ fontFamily: "Questrial" }}
                    >
                      Online
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity tw="pr-2">
                <Feather name="more-vertical" size={25} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
