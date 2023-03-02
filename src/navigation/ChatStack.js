import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatListScreen from "./screens/chat/ChatListScreen";
import GroupsScreen from "./screens/chat/GroupsScreen";
import DiscoverScreen from "./screens/chat/DiscoverScreen";

const ChatTabs = createMaterialTopTabNavigator();

export const ChatStack = () => (
  <ChatTabs.Navigator
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
    <ChatTabs.Screen
      name="ChatList"
      component={ChatListScreen}
      options={{ tabBarLabel: "Chats" }}
    />
    <ChatTabs.Screen name="Groups" component={GroupsScreen} />
    <ChatTabs.Screen name="Discover" component={DiscoverScreen} />
  </ChatTabs.Navigator>
);
