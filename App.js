import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import RootStack from "./src/navigation/RootStack";
import store from "./redux/store/store";

export default function App() {
  const [loaded] = useFonts({
    Questrial: require("./assets/fonts/Questrial-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
