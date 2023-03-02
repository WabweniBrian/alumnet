import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Switch,
  Slider,
  ActivityIndicator,
  Button,
  SafeAreaView,
} from "react-native";
import FirstComponent from "./src/components/FirstComponent";
import Home from "./src/screens/Home";
import StyledComponent from "./src/components/StyledComponent";
import { Ionicons } from "@expo/vector-icons";
// import { useFonts } from "expo-font";

import { useFonts } from "expo-font";
import AppDrawer from "./src/components/AppDrawer";

export default function Goals() {
  const [loaded] = useFonts({
    Questrial: require("./assets/fonts/Questrial-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* <AppDrawer />
      <StatusBar style="light" />
      <SafeAreaView className={classes.container}> */}
      <View className={classes.subContainer}>
        <Image source={require("./assets/favicon.png")} alt="check" />
        <Text
          className="text-xl text-white"
          style={{ fontFamily: "Questrial" }}
        >
          WabTech
        </Text>
      </View>
      <ScrollView>
        <View className="bg-slate-800 w-full rounded-lg items-center shadow-xl p-3">
          <View className={classes.checkIcon}>
            <Ionicons name="checkmark-sharp" size={24} color="white" />
          </View>
          <Text
            className="text-slate-100 text-2xl mt-4 capitalize"
            style={{ fontFamily: "Questrial" }}
          >
            payment successfully
          </Text>
          <Text
            className="text-slate-300 mt-2 text-center w-56"
            style={{ fontFamily: "Questrial" }}
          >
            You have successfully complement your payments, you can now return
            to your dashboard
          </Text>
          <View className="bg-indigo-500 w-full py-2 items-center rounded-md mt-6">
            <Text
              className="uppercase text-white font-medium"
              style={{ fontFamily: "Questrial" }}
            >
              go back to dashboard
            </Text>
          </View>
        </View>
        <Text
          className="text-center text-white mt-3 text-bold text-xl"
          style={{ fontFamily: "Questrial" }}
        >
          Other Components
        </Text>
        <View className={classes.inputWrapper}>
          <TextInput
            className={classes.input}
            placeholder="Name.."
            placeholderTextColor="#fff"
          ></TextInput>
          <TextInput
            className={classes.input}
            placeholder="Email.."
            placeholderTextColor="#fff"
          ></TextInput>
          <TextInput
            className={classes.input}
            placeholder="Phone.."
            placeholderTextColor="#fff"
          ></TextInput>
          <TextInput
            className={classes.input}
            placeholder="Address.."
            placeholderTextColor="#fff"
          ></TextInput>
          <Switch></Switch>
          <Slider className="w-full"></Slider>
          <ActivityIndicator></ActivityIndicator>
          <Button title="Click Me" />
        </View>
        {/* <StatusBar></StatusBar> */}
        <FirstComponent />
        <Home />
        <StyledComponent />
      </ScrollView>
      {/* </SafeAreaView> */}
    </>
  );
}

const classes = {
  container: "min-h-screen flex  justify-center bg-slate-900 px-6 py-8",
  subContainer: "flex align-center justify-center flex-row mb-5 gap-2 py-6",
  checkIcon:
    "w-10 h-10 rounded-full mt-2 bg-green-500/50 flex items-center justify-center",
  inputWrapper:
    "flex items-center justify-center p-3 mt-2 rounded-lg bg-slate-800",
  input:
    "my-4 bg-slate-700 px-5 py-1 rounded-lg w-full text-slate-300 placeholder-slate-300",
};
