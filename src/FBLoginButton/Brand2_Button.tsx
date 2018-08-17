import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import BaseButton from "src/common/BaseButton";
import { Props } from "./props";

export const Brand2_Button: React.SFC<Props> = props => (
  <BaseButton baseStyle={styles.base} {...props}>
    <FontAwesome name="facebook" color="blue" size={20} />
    <View style={{ width: 16 }} />
    <Text style={styles.text}>LOGIN WITH FACEBOOK</Text>
  </BaseButton>
);

const styles = StyleSheet.create({
  base: {
    borderRadius: 0,
    borderColor: "blue",
    borderWidth: 2,
    backgroundColor: "white"
  },
  text: {
    color: "blue",
    fontWeight: "bold"
  }
});
