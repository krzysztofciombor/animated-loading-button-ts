import React, { Component } from "react";
import {
  View,
  Animated,
  LayoutChangeEvent,
  Easing,
  StyleSheet
} from "react-native";

interface Props {
  isLoading: boolean;
  renderButton: (() => React.ReactNode) | React.ReactNode;
  renderLoading: (() => React.ReactNode) | React.ReactNode;
  block?: boolean;
}

interface State {
  isAnimating: boolean;
}

const ANIMATION_DURATION = 400;

export default class AnimatedLoadingButton extends Component<Props, State> {
  _animationState = new Animated.Value(0); // 0 - idle; 1 - loading

  _buttonHeight?: number = undefined;
  _buttonWidth?: number = undefined;

  _loadingHeight?: number = undefined;
  _loadingWidth?: number = undefined;

  state = {
    isAnimating: false
  };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isLoading !== this.props.isLoading) {
      this._animateButton(nextProps.isLoading);
    }
  }

  _animateButton = (isLoading: boolean) => {
    this.setState({
      isAnimating: true
    });
    Animated.timing(this._animationState, {
      toValue: isLoading ? 1 : 0,
      duration: ANIMATION_DURATION,
      easing: Easing.inOut(Easing.quad)
    }).start(() => {
      this.setState({
        isAnimating: false
      });
    });
  };

  onButtonLayout = (event: LayoutChangeEvent) => {
    if (this._buttonHeight === undefined) {
      this._buttonHeight = event.nativeEvent.layout.height;
    }
    if (this._buttonWidth === undefined) {
      this._buttonWidth = event.nativeEvent.layout.width;
    }
  };

  onLoadingLayout = (event: LayoutChangeEvent) => {
    if (this._loadingHeight === undefined) {
      this._loadingHeight = event.nativeEvent.layout.height;
    }
    if (this._loadingWidth === undefined) {
      this._loadingWidth = event.nativeEvent.layout.width;
    }
  };

  render() {
    const { renderButton, renderLoading, block } = this.props;
    console.log("RENDER BUTTON", this._buttonHeight, this._buttonWidth);
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            overflow: "hidden",
            width: this._buttonWidth
              ? this._animationState.interpolate({
                  inputRange: [0, 1],
                  outputRange: [this._buttonWidth, this._loadingWidth || 40]
                })
              : "100%",
            height:
              this._buttonHeight &&
              this._animationState.interpolate({
                inputRange: [0, 1],
                outputRange: [this._buttonHeight, this._loadingHeight || 40]
              }),
            borderRadius:
              this._buttonHeight &&
              this._animationState.interpolate({
                inputRange: [0, 1],
                outputRange: [0, this._buttonHeight]
              }),
            opacity: this._animationState.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [1, 1, 0]
            })
          }}
          onLayout={this.onButtonLayout}
        >
          {typeof renderButton === "function" ? renderButton() : renderButton}
        </Animated.View>
        <View style={styles.loadingContainer} pointerEvents="none">
          <Animated.View
            style={{
              transform: [
                {
                  scale: this._animationState.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1]
                  })
                }
              ],
              opacity: this._animationState.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 0, 1]
              })
            }}
            onLayout={this.onLoadingLayout}
          >
            {typeof renderLoading === "function"
              ? renderLoading()
              : renderLoading}
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  loadingContainer: {
    position: "absolute"
  }
});
