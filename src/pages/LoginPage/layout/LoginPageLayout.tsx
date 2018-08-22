import React from "react";
import { StyleSheet, View, Text } from "react-native";

import AnimatedLoadingButton from "src/AnimatedLoadingButton";
import { BaseButton, BaseLoadingIndicator } from "src/components/common";
import FBLoginButton from "src/components/FBLoginButton";

import { InjectedProps } from "src/brandedStylesHOC";
import { Props, BrandedStyles } from "./props";

export default class LoginPageLayout extends React.Component<
  Props & InjectedProps<BrandedStyles>
> {
  render() {
    const {
      brandStyles,
      isLoading,
      onSignInPress,
      onFbSignInPress
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <AnimatedLoadingButton
            block
            isLoading={isLoading}
            renderButton={
              <BaseButton
                onPress={onSignInPress}
                baseStyle={brandStyles.CTA_base}
                pressedStyle={brandStyles.CTA_pressed}
                disabledStyle={brandStyles.CTA_disabled}
                activeOpacity={0.8}
              >
                <Text style={brandStyles.CTA_text}>Sign In</Text>
              </BaseButton>
            }
            renderLoading={
              <BaseLoadingIndicator color="red" spinnerColor="white" />
            }
          />
        </View>
        <View style={{ height: 20 }} />
        <View style={styles.row}>
          <FBLoginButton onPress={onFbSignInPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  row: {
    flexDirection: "row"
  }
});
