import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import AccountMainScreen from "./screens/account/AccountMainScreen";
import ProfileSettingsScreen from "./screens/account/ProfileSettingsScreen";
import GeneralSettingsScreen from "./screens/account/GeneralSettingsScreen";
import ProfileInfoScreen from "./screens/account/ProfileInfoScreen";

const Stack = createStackNavigator();

export const AccountStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#982529",
      },
      headerTintColor: "#fff",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    initialRouteName="Account"
  >
    <Stack.Screen name="Account" component={AccountMainScreen} />
    <Stack.Screen
      name="ProfileSettings"
      component={ProfileSettingsScreen}
      options={{ headerTitle: "Edit Profile" }}
    />
    <Stack.Screen
      name="GeneralSettings"
      component={GeneralSettingsScreen}
      options={{ headerTitle: "Settings" }}
    />
    <Stack.Screen
      name="ProfileInfo"
      component={ProfileInfoScreen}
      options={{ headerTitle: "Profile Info" }}
    />
  </Stack.Navigator>
);
