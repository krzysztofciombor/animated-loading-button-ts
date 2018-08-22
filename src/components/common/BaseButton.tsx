import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
  StyleProp
} from "react-native";

interface ButtonProps {
  baseStyle?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
}

interface State {
  pressed: boolean;
}

export default class BaseButton extends Component<
  ButtonProps & TouchableOpacityProps,
  State
> {
  state = {
    pressed: false
  };

  onPressIn = () => {
    this.setState({
      pressed: true
    });
  };

  onPressOut = () => {
    this.setState({
      pressed: false
    });
  };

  render() {
    const { disabled, baseStyle, disabledStyle, pressedStyle } = this.props;
    const { pressed } = this.state;

    return (
      <TouchableOpacity
        style={[baseStyle, disabled && disabledStyle, pressed && pressedStyle]}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        {...this.props}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
