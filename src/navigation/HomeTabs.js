import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import FeedsScreen from "./screens/FeedsScreen";
import AccountScreen from "./screens/AccountScreen";
import { ChatStack } from "./ChatStack";
import { MenuStack } from "./screens/MenuStack";
import { AccountStack } from "./AccountStack";

const Tab = createBottomTabNavigator();

const MenuButton = ({ children, onPress }) => (
  <TouchableOpacity
    activeOpacity={1}
    tw="-top-7 items-center justify-center"
    onPress={onPress}
  >
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: "#982529",
        shadowColor: "#982529",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.5,
        elevation: 5,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View tw="items-center justify-center">
              {focused ? (
                <Ionicons name="home" size={20} color="#982529" />
              ) : (
                <Ionicons name="home-outline" size={20} color="grey" />
              )}
              <Text
                style={{
                  color: focused ? "#982529" : "grey",
                  fontFamily: "Questrial",
                  fontSize: 13,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          headerStyle: {
            backgroundColor: "#982529",
            elevation: 0,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "Questrial",
          },
          headerRight: () => (
            <View tw="flex-row gap-x-5 mr-3">
              <Ionicons name="search" size={20} color="#fff" />
              <Feather name="more-vertical" size={20} color="#fff" />
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View tw="items-center">
              {focused ? (
                <Ionicons name="chatbubbles" size={20} color="#982529" />
              ) : (
                <Ionicons name="chatbubbles-outline" size={20} color="grey" />
              )}
              <Text
                style={{
                  color: focused ? "#982529" : "grey",
                  fontFamily: "Questrial",
                  fontSize: 13,
                }}
              >
                Chat
              </Text>
            </View>
          ),
          tabBarBadge: 4,
          tabBarBadgeStyle: {
            backgroundColor: "#982529",
            top: -5,
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name="menu" size={25} color="#fff" />
          ),
          tabBarButton: (props) => <MenuButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View tw="items-center">
              {focused ? (
                <Ionicons name="briefcase" size={20} color="#982529" />
              ) : (
                <Ionicons name="briefcase-outline" size={20} color="grey" />
              )}
              <Text
                style={{
                  color: focused ? "#982529" : "grey",
                  fontFamily: "Questrial",
                  fontSize: 13,
                }}
              >
                Feeds
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="RootAccount"
        component={AccountStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View tw="items-center">
              {focused ? (
                <FontAwesome name="user" size={20} color="#982529" />
              ) : (
                <FontAwesome name="user-o" size={20} color="grey" />
              )}
              <Text
                style={{
                  color: focused ? "#982529" : "grey",
                  fontFamily: "Questrial",
                  fontSize: 13,
                }}
              >
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
