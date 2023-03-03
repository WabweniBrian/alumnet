import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import SignInScreen from "../screens/auth/SignInScreen";
import PasswordRecoveryScreen from "../screens/auth/PasswordRecoveryScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";

const Stack = createStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
  </Stack.Navigator>
);
