import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Props } from "./props";

export const Brand2_Button: React.SFC<Props> = () => (
  <View style={styles.button}>
    <Text style={styles.text}>SIGN IN</Text>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    padding: 10
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
});
