import React from "react";

import LoginPageLayout from "./layout";

interface State {
  isLoading: boolean;
}

export default class LoginPage extends React.Component<{}, State> {
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
    }, 8000);
  };

  render() {
    return (
      <LoginPageLayout
        isLoading={this.state.isLoading}
        onSignInPress={this.onButtonPress}
        onFbSignInPress={() => null}
      />
    );
  }
}
