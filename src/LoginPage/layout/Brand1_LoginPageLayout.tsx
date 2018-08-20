import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import AnimatedLoadingButton from "src/AnimatedLoadingButton";
import { BaseButton, BaseLoadingIndicator } from "src/common";
import { COLORS, SIZES } from "src/styles/Brand1_styles";

import { Props } from "./props";

export default class Brand1LoginPageLayout extends React.Component<Props> {
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
                pressedStyle={styles.CTA_pressed}
                disabledStyle={styles.CTA_disabled}
                activeOpacity={0.8}
              >
                <Text style={styles.CTA_text}>Sign In</Text>
              </BaseButton>
            }
            renderLoading={
              <BaseLoadingIndicator color="red" spinnerColor="white" />
            }
          />
        </View>
        <View style={{ height: 20 }} />
        <View style={styles.row}>
          <BaseButton
            baseStyle={styles.FB_base}
            disabledStyle={styles.FB_disabled}
            onPress={this.props.onFbSignInPress}
          >
            <FontAwesome name="facebook-official" color="white" size={24} />
            <View style={{ flex: 1 }} />
            <Text style={styles.FB_text}>Sign in with Facebook</Text>
            <View style={{ flex: 1 }} />
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
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: SIZES.borderRadius
  },
  CTA_pressed: {
    backgroundColor: "green"
  },
  CTA_disabled: {
    backgroundColor: "lightblue"
  },
  CTA_text: {
    color: "white",
    fontWeight: "600",
    fontSize: 16
  },
  FB_base: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: SIZES.borderRadius
  },
  FB_disabled: {
    backgroundColor: "lightblue"
  },
  FB_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  }
});
