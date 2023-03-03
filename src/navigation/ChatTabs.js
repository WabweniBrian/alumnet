import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatListScreen from "./screens/chat/ChatListScreen";
import GroupsScreen from "./screens/chat/GroupsScreen";
import DiscoverScreen from "./screens/chat/DiscoverScreen";

const Tabs = createMaterialTopTabNavigator();

export const ChatTabs = () => (
  <Tabs.Navigator
    initialRouteName="ChatList"
    screenOptions={{
      tabBarStyle: {
        backgroundColor: "#982529",
      },
      tabBarIndicatorStyle: { backgroundColor: "#fff", height: 3 },
      tabBarActiveTintColor: "#fff",
      lazy: true,
    }}
  >
    <Tabs.Screen
      name="ChatList"
      component={ChatListScreen}
      options={{ tabBarLabel: "Chats" }}
    />
    <Tabs.Screen name="Groups" component={GroupsScreen} />
    <Tabs.Screen name="Discover" component={DiscoverScreen} />
  </Tabs.Navigator>
);
