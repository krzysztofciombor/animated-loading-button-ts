import React, { Component } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

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
        style={[
          styles.indicator,
          {
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: size
          }
        ]}
      >
        <ActivityIndicator color={spinnerColor} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    alignItems: "center",
    justifyContent: "center"
  }
});
