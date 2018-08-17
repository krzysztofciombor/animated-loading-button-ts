import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import BaseButton from "src/common/BaseButton";
import { Props } from "./props";

export const Brand1_Button: React.SFC<Props> = props => (
  <BaseButton
    baseStyle={styles.base}
    disabledStyle={styles.disabled}
    {...props}
  >
    <FontAwesome name="facebook-official" color="white" size={24} />
    <View style={{ width: 16 }} />
    <Text style={styles.text}>Sign in with Facebook</Text>
  </BaseButton>
);

const styles = StyleSheet.create({
  base: {
    borderRadius: 2,
    backgroundColor: "blue"
  },
  disabled: {
    backgroundColor: "lightblue"
  },
  text: {
    color: "white"
  }
});
