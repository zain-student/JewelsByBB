import * as React from "react";
import { Button, TouchableOpacity } from "react-native";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../Screens/register";
import Login from "../Screens/login";
import Home from "../Screens/Home";
import More from "../Screens/More";
import AboutUs from "../Screens/AboutUs";
// import Header from "../components/header";
import Icon from "react-native-vector-icons/AntDesign";
import { ColorValue } from "react-native";
import Setting from "../Screens/Setting";
import { Feather } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native-gesture-handler";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = (
  route: RouteProp<ParamListBase, string>,
  color: number | ColorValue | undefined
) => {
  let iconName;

  switch (route.name) {
    case "Home":
      iconName = "home";
      // color = "#f194ff";
      break;
    case "More":
      iconName = "book";
      break;
    case "Setting":
      iconName = "setting";
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={30} />;
};
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitle: "JewelsByBB",
          headerRight: () => (
            <TouchableOpacity>
              <Feather
                name="shopping-cart"
                size={30}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
          // {/* // headerTitle: () => <Header name="JewelsByBB" />, */}
        }}
      />

      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerTitleAlign: "center",
          headerTitle: "MORE",
          headerRight: () => (
            <TouchableOpacity>
              <Feather
                name="shopping-cart"
                size={30}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
          // {/* // headerTitle: () => <Header name="JewelsByBB" />, */}
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Setting",
          headerRight: () => (
            <TouchableOpacity>
              <Feather
                name="shopping-cart"
                size={30}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
          // headerTitle: () => <Header name="Setting" />,
        }}
        // options={{ headerTitleAlign: "center" }}
      />
    </Tab.Navigator>
  );
}
export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerShown: false,
          }}
          component={Register}
        />
        <Stack.Screen
          name="AboutUs"
          options={{
            headerTitleAlign: "center",
            // headerShown: false,
          }}
          component={AboutUs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
