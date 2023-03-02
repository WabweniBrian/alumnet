import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const OnBoardingScreen = ({ navigation }) => {
  const customStyles = {
    titleStyles: {
      color: "#982529",
      fontFamily: "Questrial",
      fontWeight: "bold",
    },
    subTitleStyles: {
      fontFamily: "Questrial",
    },
  };

  const Done = ({ ...props }) => (
    <TouchableOpacity
      tw="mr-4 w-10 h-10 bg-[#982529] rounded-full flex-1 items-center justify-center"
      {...props}
      activeOpacity={1}
    >
      <Feather name="plus" size={25} color="white" />
    </TouchableOpacity>
  );

  const Dots = ({ selected }) => {
    const backgroundColor = selected ? "#982529" : "rgba(152, 37, 41, 0.6)";
    return (
      <View
        style={{
          width: selected ? 7 : 5,
          height: selected ? 7 : 5,
          marginHorizontal: 3,
          borderRadius: 35,
          backgroundColor,
        }}
      />
    );
  };

  return (
    <>
      <StatusBar />
      <Onboarding
        onDone={() => navigation.navigate("Auth")}
        onSkip={() => navigation.navigate("Auth")}
        bottomBarHighlight={false}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        Dot
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../assets/onboarding1.png")}
                style={{ width: 350, height: 350 }}
                resizeMode="contain"
              />
            ),
            title: "Connect with others",
            subtitle: "Connect with fellow alumni and interact together",
            ...customStyles,
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../assets/onboarding2.png")}
                style={{ width: 350, height: 350 }}
                resizeMode="contain"
              />
            ),
            title: "Career guidance",
            subtitle:
              "Get career guidance from fellow alumni and connections to jobs",
            ...customStyles,
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../assets/onboarding3.png")}
                style={{ width: 350, height: 350 }}
                resizeMode="contain"
              />
            ),
            title: "Share your experience",
            subtitle:
              "Share your experience, sucsess stories and motivate others",
            ...customStyles,
          },
        ]}
      />
    </>
  );
};

export default OnBoardingScreen;
