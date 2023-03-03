import { ChatTabs } from "./ChatTabs";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

export const ChatStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Group>
      <Stack.Screen
        name="RootChat"
        component={ChatTabs}
        options={{ tabBarLabel: "Chats" }}
      />
    </Stack.Group>
  </Stack.Navigator>
);
