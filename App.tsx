import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, View } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";
import Button from "./src/components/Button";
import MyKeyboard from "./src/components/MyKeyboard";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme == "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <StatusBar style={theme == "light" ? "dark" : "light"} />
        <Switch
          style={styles.switch}
          value={theme == "light"}
          onValueChange={() => setTheme(theme == "light" ? "dark" : "light")}
        />
        <MyKeyboard />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  switch: {
    marginTop: 30,
  },
});
