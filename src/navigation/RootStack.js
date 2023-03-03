import { StatusBar } from "expo-status-bar";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import HomeStack from "./HomeStack";
import { AuthStack } from "./AuthStack";

const Stack = createStackNavigator();

const RootStack = () => (
  <>
    <StatusBar style="light" backgroundColor="#982529" />
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Root" component={HomeStack} />
    </Stack.Navigator>
  </>
);

export default RootStack;
