import React from "react";
import { StyleSheet, View } from "react-native";

import AnimatedLoadingButton from "src/AnimatedLoadingButton";
import BrandedCTAButton from "src/CTAButton";
import BrandedFBLoginButton from "src/FBLoginButton";
import BrandedLoadingIndicator from "src/LoadingIndicator";

interface State {
  isLoading: boolean;
}

export default class App extends React.Component<{}, State> {
  state = {
    isLoading: false
  };

  onButtonPress = () => {
    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 3000);
  };

  renderButton = () => {
    return <BrandedCTAButton onPress={this.onButtonPress} label="Sign In" />;
  };

  renderLoading = () => {
    return <BrandedLoadingIndicator />;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <AnimatedLoadingButton
            isLoading={this.state.isLoading}
            renderButton={this.renderButton}
            renderLoading={this.renderLoading}
          />
        </View>
        <View style={{ height: 15 }} />
        <View style={styles.row}>
          <BrandedFBLoginButton onPress={() => null} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  row: {
    flexDirection: "row"
  }
});
