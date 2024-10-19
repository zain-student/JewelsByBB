import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  View,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import React from "react";
const catagories = [
  { name: "Rings", image: require("../assets/images/rings.jpg") },
  { name: "Armlets", image: require("../assets/images/armlets.jpg") },
  { name: "Earrings", image: require("../assets/images/earrings.jpg") },
  { name: "Necklaces", image: require("../assets/images/necklaces.jpg") },
];
const data = [
  { name: "Jewellery", src: require("../assets/images/pic1.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic2.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic3.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic4.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic6.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic5.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic7.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic8.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic9.jpg"), price: "5$" },
  {
    name: "Jewellery",
    src: require("../assets/images/pic10.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic11.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic12.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic13.jpg"),
    price: "5$",
  },
  { name: "Jewellery", src: require("../assets/images/pic7.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic8.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic9.jpg"), price: "5$" },
  {
    name: "Jewellery",
    src: require("../assets/images/pic10.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic11.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic12.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic13.jpg"),
    price: "5$",
  },
  { name: "Jewellery", src: require("../assets/images/pic1.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic2.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic3.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic4.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic6.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic5.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic7.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic8.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic9.jpg"), price: "5$" },
  {
    name: "Jewellery",
    src: require("../assets/images/pic10.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic11.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic12.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic13.jpg"),
    price: "5$",
  },
  { name: "Jewellery", src: require("../assets/images/pic7.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic8.jpg"), price: "5$" },
  { name: "Jewellery", src: require("../assets/images/pic9.jpg"), price: "5$" },
  {
    name: "Jewellery",
    src: require("../assets/images/pic10.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic11.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic12.jpg"),
    price: "5$",
  },
  {
    name: "Jewellery",
    src: require("../assets/images/pic13.jpg"),
    price: "5$",
  },
];
const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        // marginTop: 20,
        paddingTop: 20,
        backgroundColor: "#FCFCF7",
        borderTopWidth: 0.5,
      }}>
      <TextInput
        label="Search"
        placeholder="Search here.."
        keyboardType="default"
        autoCapitalize="none"
        style={styles.textInput}
      />
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 12,
          marginTop: 15,
        }}>
        <Text style={{ fontWeight: 600 }}>Categories</Text>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 12 }}
        contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
        keyExtractor={(item, idx) => item.name + idx}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => {
          return (
            <View style={styles.column}>
              <TouchableOpacity
              // style={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // flexDirection: "row",
              // flex: 1,
              // height: 200,
              // // backgroundColor: "#6b7280",
              // borderRadius: 20,
              // }}
              >
                {/* <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "bold",
                  alignSelf: "flex-start",
                  marginLeft: 20,
                }}>
                {item.id}
              </Text> */}
                <Image style={styles.colImage} source={item.src} />
                <Text
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: 10,
                    fontSize: 20,
                    color: "green",
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: 10,
                    fontSize: 20,
                    color: "green",
                  }}>
                  {item.price}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={styles.cartButton}>
                    <Text style={{ color: "white" }}>BUY NOW</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "green",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      marginLeft: 3,
                      marginBottom: 10,
                      borderRadius: 10,
                      alignItems: "center",
                    }}>
                    <Icon
                      name="heart"
                      size={20}
                      color="white"
                      style={{ marginLeft: 0 }}
                    />
                  </TouchableOpacity>
                </View>
                {/* <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  alignSelf: "center",
                  // marginLeft: 20,
                }}> */}
                {/* {item.name} */}
                {/* </Text> */}
              </TouchableOpacity>
            </View>
          );
        }}
        ListHeaderComponentStyle={{ marginVertical: 10 }}
        ListHeaderComponent={() => (
          <View>
            <FlatList
              horizontal={true}
              style={{ paddingVertical: 5 }}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
              data={catagories}
              keyExtractor={(item, idx) => item + idx}
              renderItem={({ item }) => (
                <View style={styles.row}>
                  <TouchableOpacity>
                    <Image style={styles.small} source={item.image} />
                    <Text
                      style={{
                        alignSelf: "center",
                        fontSize: 20,
                        color: "blue",
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 12,
                marginTop: 15,
              }}>
              <Text style={{ fontWeight: 600 }}>Popular</Text>
              <TouchableOpacity>
                <Text style={{ color: "skyblue", fontSize: 20 }}>
                  View all{" > "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textInput: {
    width: "90%",
    fontSize: 16,
    alignSelf: "center",
    height: 40,
    borderWidth: 2,
    paddingLeft: 7,
    borderColor: "#ccc",
    borderRadius: 40,
  },
  row: {
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  column: {
    // backgroundColor: "grey",
    backgroundColor: "#FCFCF7",
    flexDirection: "column-reverse",
    alignItems: "center",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 10,
    // borderWidth: 0.5,
    shadowColor: "blue",
    shadowOffset: { width: 6, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  cartButton: {
    backgroundColor: "black",
    justifyContent: "center",
    width: 120,
    height: 30,
    marginLeft: 10,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  colImage: {
    width: 165,
    height: 200,
    borderTopStartRadius: 20,
    borderBottomEndRadius: 40,
  },
  small: {
    width: 100,
    height: 100,
    borderRadius: 50,
    //   alignSelf: "center",
    //   marginBottom: 30,
    //   marginLeft: 30,
  },
});
