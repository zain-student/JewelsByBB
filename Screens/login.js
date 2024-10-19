import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
  Image,
  ToastAndroid,
  View,
} from "react-native";
import React, { useState } from "react";
// import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { Icon } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      ToastAndroid.show(
        "Please fill in all fields",
        ToastAndroid.showWithGravity
      );
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          ToastAndroid.show("User signed in!", ToastAndroid.SHORT);
          navigation.navigate("Home");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          // console.error(error);
          ToastAndroid.show(
            "Invalid email or password",
            ToastAndroid.showWithGravity
          );
        });
    }
  };
  function handlePasswordShow() {
    if (showPass == true) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />

        <Text style={styles.text}>Welcome Back</Text>
        <Text style={styles.text1}>Please login to your account</Text>

        <View style={[styles.inputConn, { flexDirection: "row" }]}>
          <Icon name="email" size={30} color="grey" />
          <TextInput
            label="Email"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* <Icon name="email" /> */}
        <View style={[styles.inputConn, { flexDirection: "row" }]}>
          <Icon name="lock" size={30} color="grey" />
          <TextInput
            label="Password"
            secureTextEntry={!showPass}
            placeholder="Password"
            keyboardType="default"
            autoCapitalize="none"
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
          />
          <Feather
            name={showPass ? "eye-off" : "eye"}
            size={25}
            color="grey"
            marginVertical={5}
            marginLeft={-5}
            onPress={handlePasswordShow}
            style={styles.feather}
          />
        </View>
        <Button title="Login" onPress={handleLogin} loading />
        {/* <Button title="Solid" type="solid" loading /> */}
        <View style={styles.signupContainer}>
          <Text style={{ alignSelf: "flex-end" }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{ fontSize: 20, color: "#FF5722", fontWeight: "bold" }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#FCFCF7",
    backgroundColor: "#94C7C3",
  },
  innerView: {
    width: 300,
    height: 500,
    marginTop: 70,
    borderRadius: 4,
    borderColor: "black",
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: "center",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 30,
  },
  text1: {
    color: "black",
    textAlign: "center",
    marginBottom: 50,
  },
  inputConn: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginVertical: 15,
    padding: 6,
    backgroundColor: "#fff",
  },
  textInput: {
    width: "80%",
    fontSize: 16,
    marginLeft: 6,
    height: 40,
    // width: 300,
    marginBottom: 45,
    paddingBottom: 7,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});
