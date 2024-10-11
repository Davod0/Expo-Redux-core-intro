import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { RootStackNavigator } from "./navigators/RootStackNavigator";
import { store } from "./store/Store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
