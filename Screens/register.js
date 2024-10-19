import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
  Image,
  View,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Icon } from "@rneui/themed";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleRegister = () => {
    if (email === "" || name === "" || password === "") {
      ToastAndroid.show("Please fill all fields", ToastAndroid.SHORT);
    } else {
      createUserWithEmailAndPassword(auth, email, password, name)
        .then(() => {
          ToastAndroid.show("User account Created", ToastAndroid.SHORT);
          // alert("User account created!");
          navigation.navigate("Home");
          setEmail("");
          setPassword("");
          setName("");
        })
        .catch((error) => {
          // console.error(error);
          ToastAndroid.show("Error creating user account", ToastAndroid.SHORT);
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
        <Text style={styles.text1}>Please register here</Text>
        <View style={[styles.inputConn, { flexDirection: "row" }]}>
          <Icon name="face" size={30} color="grey" />
          <TextInput
            label="name"
            placeholder="UserName"
            keyboardType="default"
            // autoCapitalize="none"
            style={styles.textInput}
            value={name}
            onChangeText={setName}
          />
        </View>
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
        <Button title="Signup" onPress={handleRegister} />
        <View style={styles.signupContainer}>
          <Text style={{ alignSelf: "flex-end" }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{ fontSize: 20, color: "#FF5722", fontWeight: "bold" }}>
              Signin
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
    marginTop: 30,
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
    marginTop: 20,
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
  // textInput: {
  //   height: 40,
  //   width: 300,
  //   marginBottom: 40,
  //   borderBottomWidth: 2,
  //   borderBottomColor: "#ccc",
  // },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});
