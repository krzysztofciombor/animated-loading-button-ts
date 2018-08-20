import React, { Component } from "react";
import { View } from "react-native";
import posed from "react-native-pose";

interface Props {
  isLoading: boolean;
  renderButton: (() => React.ReactNode) | React.ReactNode;
  renderLoading: (() => React.ReactNode) | React.ReactNode;
  block?: boolean;
}

type AnimationState = "default" | "loading";

const buttonAnimConfig: { [key in AnimationState]: any } = {
  default: { scaleX: 1, opacity: 1 },
  loading: { scaleX: 0, opacity: 0 }
};

const loadingAnimConfig: { [key in AnimationState]: any } = {
  default: { opacity: 0, scaleX: 0, scaleY: 0 },
  loading: { opacity: 1, scaleX: 1, scaleY: 1 }
};

const ButtonWrapper = posed.View(buttonAnimConfig);

const LoadingWrapper = posed.View(loadingAnimConfig);

export default class AnimatedLoadingButton extends Component<Props> {
  render() {
    const { isLoading, renderButton, renderLoading, block } = this.props;
    const animationState: AnimationState = isLoading ? "loading" : "default";
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          flexDirection: "column"
        }}
      >
        <View style={{ flexDirection: "row", flexGrow: 1 }}>
          <ButtonWrapper
            pose={animationState}
            style={{ flexGrow: block ? 1 : 0 }}
          >
            {typeof renderButton === "function" ? renderButton() : renderButton}
          </ButtonWrapper>
        </View>
        <View style={{ position: "absolute" }} pointerEvents="none">
          <LoadingWrapper pose={animationState}>
            {typeof renderLoading === "function"
              ? renderLoading()
              : renderLoading}
          </LoadingWrapper>
        </View>
      </View>
    );
  }
}
