import { Feather, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const SignUpScreen = ({ navigation }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const usernameInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const emailInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const passwordInputChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <>
      <StatusBar style="light" backgroundColor="#982529" />
      <View style={styles.container}>
        <Animatable.View style={styles.header} animation="bounceInUp">
          <Text style={styles.text_header}>Hello!</Text>
          <Text style={{ color: "#fff", fontFamily: "Questrial" }}>
            Let's get started by signing up!
          </Text>
        </Animatable.View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              size={20}
              color="#05375a"
              style={{ marginTop: -10 }}
            />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => usernameInputChange(val)}
              tw="border-b-[#e1e7ee] focus:border-b focus:border-b-[#982529]"
            />
            {data.check_textInputChange && (
              <Animatable.View animation="bounceIn">
                <Feather
                  name="check-circle"
                  size={20}
                  color="green"
                  style={{ marginTop: -10 }}
                />
              </Animatable.View>
            )}
          </View>
          <Text style={[styles.text_footer, { marginTop: 35 }]}>Email</Text>
          <View style={styles.action}>
            <FontAwesome
              name="envelope-o"
              size={20}
              color="#05375a"
              style={{ marginTop: -10 }}
            />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => emailInputChange(val)}
              tw="border-b-[#e1e7ee] focus:border-b focus:border-b-[#982529]"
            />
            {data.check_textInputChange && (
              <Animatable.View animation="bounceIn">
                <Feather
                  name="check-circle"
                  size={20}
                  color="green"
                  style={{ marginTop: -10 }}
                />
              </Animatable.View>
            )}
          </View>
          <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
          <View style={styles.action}>
            <Feather
              name="lock"
              size={20}
              color="#05375a"
              style={{ marginTop: -10 }}
            />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry}
              autoCapitalize="none"
              onChangeText={(val) => passwordInputChange(val)}
              tw="border-b-[#e1e7ee] focus:border-b focus:border-b-[#982529]"
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather
                  name="eye-off"
                  size={20}
                  color="green"
                  style={{ marginTop: -10 }}
                />
              ) : (
                <Feather
                  name="eye"
                  size={20}
                  color="green"
                  style={{ marginTop: -10 }}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 60 }}>
            <TouchableOpacity
              style={styles.buttonSignIn}
              onPress={() => navigation.navigate("Root")}
            >
              <Text style={styles.textSignIn}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonSignUp, { marginTop: 20 }]}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={styles.textSignUp}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#982529",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "Questrial",
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    fontFamily: "Questrial",
  },
  action: {
    flexDirection: "row",
    marginTop: 20,

    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    borderBottomWidth: 1,
    // borderBottomColor: "#e1e7ee",
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    fontFamily: "Questrial",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  buttonSignIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#982529",
  },
  textSignIn: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Questrial",
    color: "#fff",
  },
  buttonSignUp: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderBottomColor: "#982529",
  },
  textSignUp: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Questrial",
    color: "#982529",
  },
});
