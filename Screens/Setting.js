import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Button,
  StyleSheet,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Icon } from "@rneui/themed";
const Setting = ({ navigation }) => {
  // const emailId = "zainpmas4989@gmail.com";
  const Email = (email) => {
    // Linking.openURL("mailto:" + email);
    // Linking.openURL("https://www.google.co.in/");
    Linking.openURL("mailto:zainpmas4989@gmail.com");
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "white" }}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "white" }}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        {/* <Icon name="" size={30} color="grey" />
         */}
        <Feather
          name="eye"
          size={25}
          color="grey"
          // marginVertical={}
          marginLeft={-5}
          style={styles.feather}
        />
        <TouchableOpacity
        // style={styles.button}
        // onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "black", fontSize: 20, marginBottom: 10 }}>
            Recently Viewed
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <Feather
          name="bell"
          size={25}
          color="grey"
          // marginVertical={}
          marginLeft={-5}
          style={styles.feather}
        />
        <TouchableOpacity
          style={styles.touchButton}
          // onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "black", fontSize: 20, marginBottom: 10 }}>
            Notifications
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <Feather
          name="shopping-bag"
          size={25}
          color="grey"
          // marginVertical={}
          marginLeft={-5}
          style={styles.feather}
        />
        <TouchableOpacity
          style={styles.touchButton}
          // onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "black", fontSize: 20, marginBottom: 10 }}>
            Orders
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <Feather
          name="user"
          size={25}
          color="grey"
          // marginVertical={}
          marginLeft={-5}
          style={styles.feather}
        />
        <TouchableOpacity
          style={styles.touchButton}
          onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "black", fontSize: 20, marginBottom: 10 }}>
            My Account
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.emailContainer}>
        <TouchableOpacity style={styles.touchButton} onPress={Email}>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: "semibold",
              marginBottom: 10,
              marginTop: 20,
            }}>
            EMAIL US
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 0.5,
    borderTopColor: "grey",
    backgroundColor: "#FCFCF7",
    // justifyContent: "space-around",
    // alignItems: "center",
    // flexDirection: "row",
    // marginTop: 40,
  },
  buttonContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    // marginBottom: 10,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    // marginBottom: 10,
  },
  emailContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    // borderBottomWidth: 0.5,
    // borderBottomColor: "grey",
    // marginBottom: 10,
  },
  feather: {
    marginRight: 5,
    marginBottom: 7,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    shadowColor: "black",
    marginBottom: 10,
  },
  touchButton: {},
});
