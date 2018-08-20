import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";

interface Props {
  size: number;
  color: string;
  spinnerColor?: string;
}

export default class BaseLoadingIndicator extends Component<Props> {
  static defaultProps = {
    size: 40
  };

  render() {
    const { size, color, spinnerColor } = this.props;
    return (
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: size,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ActivityIndicator color={spinnerColor} />
      </View>
    );
  }
}
