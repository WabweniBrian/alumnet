import { Feather, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
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

  const handlePasswordChange = (val) => {
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
          <Text style={styles.text_header}>Welcome Back!</Text>
          <Text style={{ color: "#fff", fontFamily: "Questrial" }}>
            Let's pick from where we ended!
          </Text>
        </Animatable.View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.text_footer}>Email</Text>
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
              onChangeText={(val) => textInputChange(val)}
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
              onChangeText={(val) => handlePasswordChange(val)}
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
            {/* <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </LinearGradient> */}
            <TouchableOpacity style={styles.buttonSignIn}>
              <Text style={styles.textSignIn}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonSignUp, { marginTop: 20 }]}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.textSignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </>
  );
};

export default LoginScreen;

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
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
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
