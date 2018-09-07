import React from "react";
import { StyleSheet, View, Text } from "react-native";

import AnimatedLoadingButton from "src/AnimatedLoadingButton";
import { BaseButton, BaseLoadingIndicator } from "src/components/common";
import FBLoginButton from "src/components/FBLoginButton";

import { CTAButton } from "./components/CTAButton";
import { CTAButtonText } from "./components/CTAButtonText";

interface Props {
  isLoading: boolean;
  onSignInPress: () => void;
  onFbSignInPress: () => void;
}

export default class LoginPageLayout extends React.Component<Props> {
  render() {
    const { isLoading, onSignInPress, onFbSignInPress } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <AnimatedLoadingButton
            block
            isLoading={isLoading}
            renderButton={
              <BaseButton
                onPress={onSignInPress}
                baseStyle={CTAButton}
                activeOpacity={0.8}
              >
                <CTAButtonText>Sign In</CTAButtonText>
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
