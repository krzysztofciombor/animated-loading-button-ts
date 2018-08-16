import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import posed from "react-native-pose";

interface Props {
  isLoading: boolean;
  onPress: () => void;
  renderButton: () => React.ReactNode;
  renderLoading: () => React.ReactNode;
}

type AnimationState = "default" | "loading";

const buttonAnimConfig: { [key in AnimationState]: any } = {
  default: { scaleX: 1, opacity: 1 },
  loading: { scaleX: 0, opacity: 0 },
};

const loadingAnimConfig: { [key in AnimationState]: any } = {
  default: { opacity: 0, scaleX: 0, scaleY: 0 },
  loading: { opacity: 1, scaleX: 1, scaleY: 1 }
};

const ButtonWrapper = posed.View(buttonAnimConfig);

const LoadingWrapper = posed.View(loadingAnimConfig);

export default class AnimatedLoadingButton extends Component<Props> {
  render() {
    const { isLoading, onPress, renderButton, renderLoading } = this.props;
    const animationState: AnimationState = isLoading ? "loading" : "default";
    return (
      <TouchableOpacity onPress={onPress} disabled={isLoading}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ButtonWrapper pose={animationState}>{renderButton()}</ButtonWrapper>
          <View style={{ position: "absolute" }}>
            <LoadingWrapper pose={animationState}>
              {renderLoading()}
            </LoadingWrapper>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
