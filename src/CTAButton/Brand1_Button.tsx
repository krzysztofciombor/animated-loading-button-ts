import React from "react";
import { Text, StyleSheet } from "react-native";

import BaseButton from "src/common/BaseButton";
import { Props } from "./props";

export const Brand1_Button: React.SFC<Props> = props => (
  <BaseButton
    baseStyle={styles.base}
    pressedStyle={styles.pressed}
    disabledStyle={styles.disabled}
    activeOpacity={0.8}
    {...props}
  >
    <Text style={styles.text}>{props.label}</Text>
  </BaseButton>
);

const styles = StyleSheet.create({
  base: {
    borderRadius: 2,
    backgroundColor: "lightseagreen"
  },
  pressed: {
    backgroundColor: "green"
  },
  disabled: {
    backgroundColor: "lightblue"
  },
  text: {
    color: "white"
  }
});
