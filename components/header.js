import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        // marginLeft: 90,
        height: 60,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: "black",
        backgroundColor: "blue",
        // elevation: 3,
      }}>
      <Text style={{ fontWeight: "bold", alignSelf: "center", fontSize: 28 }}>
        {props.name}
      </Text>
      <View style={{ backgroundColor: "yellow", marginLeft: 50 }}>
        <Feather name="bell" size={30} style={{ marginLeft: 60 }} />
      </View>
    </View>
  );
};

export default Header;
