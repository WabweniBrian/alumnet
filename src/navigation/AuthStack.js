import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./screens/auth/SignInScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import PasswordRecoveryScreen from "./screens/auth/PasswordRecoveryScreen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
  </Stack.Navigator>
);
