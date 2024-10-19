import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const More = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* <Icon name="" size={30} color="grey" />
         */}
        <Feather
          name="users"
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
            Lets Collab!
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <Feather
          name="book-open"
          size={25}
          color="grey"
          // marginVertical={}
          marginLeft={-5}
          style={styles.feather}
        />
        <TouchableOpacity
          style={styles.touchButton}
          onPress={() => navigation.navigate("AboutUs")}>
          <Text style={{ color: "black", fontSize: 20, marginBottom: 10 }}>
            About Us
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <Feather
          name="truck"
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
            Shipping & Handling
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default More;
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
  innerContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    // marginBottom: 10,
  },
  feather: {
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 7,
  },
});
