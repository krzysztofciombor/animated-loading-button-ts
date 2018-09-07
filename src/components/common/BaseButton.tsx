import React, { Component } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { InterpolationValue } from "styled-components";

interface ButtonProps {
  baseStyle?: InterpolationValue[];
  pressedStyle?: InterpolationValue[];
  disabledStyle?: InterpolationValue[];
}

interface State {
  pressed: boolean;
}

const ButtonWrapper = styled<
  ButtonProps & TouchableOpacityProps & { pressed: boolean }
>(({ pressed, baseStyle, pressedStyle, disabledStyle, ...rest }) => (
  <TouchableOpacity {...rest} />
))`
  ${props => props.baseStyle};
  ${props => props.disabled && props.disabledStyle};
  ${props => props.pressed && props.pressedStyle};
`;

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
    const { pressed } = this.state;

    return (
      <ButtonWrapper
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        pressed={pressed}
        {...this.props}
      >
        {this.props.children}
      </ButtonWrapper>
    );
  }
}
