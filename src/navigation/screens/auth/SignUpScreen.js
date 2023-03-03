import { Feather, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { signUpValidationSchema } from "./userValidationSchema";

const SignInScreen = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const SignUpUser = () => {
    navigation.replace("Root");
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

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={signUpValidationSchema}
          onSubmit={(values) => {
            // Signup Functionality
            console.log(values);
            SignUpUser();
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
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
                  tw="border-slate-300"
                  autoCapitalize="none"
                  value={values.username}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                />

                {touched.username && !errors.username && (
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
              {errors.username && touched.username && (
                <Text tw="text-red-500 text-sm my-2">{errors.username} </Text>
              )}
              <Text style={[styles.text_footer, { marginTop: 30 }]}>Email</Text>
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
                  tw="border-slate-300"
                  autoCapitalize="none"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />

                {touched.email && !errors.email && (
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
              {errors.email && touched.email && (
                <Text tw="text-red-500 text-sm my-2">{errors.email} </Text>
              )}
              <Text style={[styles.text_footer, { marginTop: 30 }]}>
                Password
              </Text>
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
                  tw="border-slate-300"
                  secureTextEntry={secureTextEntry}
                  autoCapitalize="none"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />

                <TouchableOpacity onPress={updateSecureTextEntry}>
                  {secureTextEntry ? (
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
              {errors.password && touched.password && (
                <Text tw="text-red-500 text-sm my-2">{errors.password} </Text>
              )}

              <View style={{ marginTop: 60 }}>
                <TouchableOpacity
                  style={styles.buttonSignInScreen}
                  onPress={handleSubmit}
                >
                  <Text style={styles.textSignInScreen}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.buttonSignUp, { marginTop: 20 }]}
                  onPress={() => navigation.navigate("Root")}
                >
                  <Text style={styles.textSignUp}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </Animatable.View>
          )}
        </Formik>
      </View>
    </>
  );
};

export default SignInScreen;

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
  buttonSignInScreen: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#982529",
  },
  textSignInScreen: {
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
