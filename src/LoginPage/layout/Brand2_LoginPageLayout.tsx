import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import AnimatedLoadingButton from "src/AnimatedLoadingButton";
import { BaseButton, BaseLoadingIndicator } from "src/common";
import { COLORS } from "src/styles/Brand2_styles";

import { Props } from "./props";

export default class Brand2LoginPageLayout extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <AnimatedLoadingButton
            block
            isLoading={this.props.isLoading}
            renderButton={
              <BaseButton
                onPress={this.props.onSignInPress}
                baseStyle={styles.CTA_base}
                disabledStyle={styles.CTA_disabled}
                activeOpacity={0.8}
              >
                <Text style={styles.CTA_text}>SIGN IN</Text>
              </BaseButton>
            }
            renderLoading={
              <BaseLoadingIndicator color="red" spinnerColor="white" />
            }
          />
        </View>
        <View style={{ height: 16 }} />
        <View style={styles.row}>
          <BaseButton
            baseStyle={styles.FB_base}
            onPress={this.props.onFbSignInPress}
          >
            <FontAwesome name="facebook" color="blue" size={20} />
            <View style={{ width: 16 }} />
            <Text style={styles.FB_text}>LOGIN WITH FACEBOOK</Text>
          </BaseButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  row: {
    flexDirection: "row"
  },
  CTA_base: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  CTA_disabled: {
    backgroundColor: "silver"
  },
  CTA_text: {
    color: "white",
    fontWeight: "bold"
  },
  FB_base: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "blue",
    borderWidth: 1,
    backgroundColor: "white",
    padding: 10
  },
  FB_text: {
    color: "blue",
    fontWeight: "bold"
  }
});
