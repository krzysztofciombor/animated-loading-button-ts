import React from "react";
import { Text, StyleSheet } from "react-native";

import BaseButton from "src/common/BaseButton";
import { Props } from "./props";

export const Brand2_Button: React.SFC<Props> = props => (
  <BaseButton
    baseStyle={styles.base}
    disabledStyle={styles.disabled}
    {...props}
  >
    <Text style={styles.text}>{props.label.toUpperCase()}</Text>
  </BaseButton>
);

const styles = StyleSheet.create({
  base: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  disabled: {
    backgroundColor: "silver"
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
});
