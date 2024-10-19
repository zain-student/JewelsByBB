import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase configuration object
const firebaseConfig = {
  // Your Firebase credentials here
  apiKey: "AIzaSyCaywZQ7MeMUaK6GkL6_ZgSJtoWgxUWbVU",
  authDomain: "jewelsbybb-1f65d.firebaseapp.com",
  projectId: "jewelsbybb-1f65d",
  storageBucket: "jewelsbybb-1f65d.appspot.com",
  messagingSenderId: "577136361504",
  appId: "1:577136361504:web:805834e430f9e89d6e3c45",
  measurementId: "G-XJLTMJ9BS1",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
