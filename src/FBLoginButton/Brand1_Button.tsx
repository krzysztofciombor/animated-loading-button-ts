import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import BaseButton from "src/common/BaseButton";
import { getBrandedStyle } from "src/common/brandedStyles";
import { Brand } from "src/Brands";
import { Props } from "./props";

export const Brand1_Button: React.SFC<Props> = props => (
  <BaseButton
    baseStyle={styles.base}
    disabledStyle={styles.disabled}
    {...props}
  >
    <FontAwesome name="facebook-official" color="white" size={24} />
    <View style={{ flex: 1 }} />
    <Text style={styles.text}>Sign in with Facebook</Text>
    <View style={{ flex: 1 }} />
  </BaseButton>
);

const styles = StyleSheet.create({
  base: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: getBrandedStyle(Brand.Brand1, "borderRadius")
  },
  disabled: {
    backgroundColor: "lightblue"
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  }
});
