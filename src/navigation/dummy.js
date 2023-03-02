// import { View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

// // Screens
// import HomeScreen from "./screens/HomeScreen";
// import MenuScreen from "./screens/MenuScreen";
// import FeedsScreen from "./screens/FeedsScreen";
// import AccountScreen from "./screens/AccountScreen";
// import ChatScreen from "./screens/ChatScreen";

// // Screen names
// const homeName = "Home";
// const menuName = "Menu";
// const feedsName = "Feeds";
// const account = "Account";
// const chatName = "Chat";

// const Tab = createBottomTabNavigator();

// const MainContainer = () => {
//   return (
//     // <NavigationContainer>
//     <Tab.Navigator
//       initialRouteName={homeName}
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           let rn = route.name;
//           if (rn === homeName) {
//             iconName = focused ? "home" : "home-outline";
//           } else if (rn === menuName) {
//             iconName = focused ? "grid" : "grid-outline";
//           } else if (rn === feedsName) {
//             iconName = focused ? "briefcase" : "briefcase-outline";
//           } else if (rn === account) {
//             iconName = focused ? "person" : "person-outline";
//           } else if (rn === chatName) {
//             iconName = focused ? "chatbubbles" : "chatbubbles-outline";
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#982529",
//         tabBarInactiveTintColor: "grey",
//         tabBarLableStyle: {
//           paddingBottom: 1,
//           fontSize: 10,
//         },
//         tabBarStyle: {
//           height: 55,
//         },
//         tabBarBadgeStyle: {
//           backgroundColor: "#982529",
//         },
//       })}
//     >
//       <Tab.Screen name={homeName} component={HomeScreen} />
//       <Tab.Screen
//         name={chatName}
//         component={ChatScreen}
//         options={{ tabBarBadge: 3 }}
//       />
//       <Tab.Screen name={menuName} component={MenuScreen} />
//       <Tab.Screen name={feedsName} component={FeedsScreen} />
//       <Tab.Screen name={account} component={AccountScreen} />
//     </Tab.Navigator>
//     // </NavigationContainer>
//   );
// };

// export default MainContainer;
