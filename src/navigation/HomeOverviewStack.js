import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ModalScreen from "../screens/home/ModalScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const HomeOverviewStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Overview" component={HomeScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          //   options={{ presentation: "modal" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
