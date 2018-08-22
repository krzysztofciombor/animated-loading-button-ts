import React from "react";
import {
  RegisteredStyle,
  ImageStyle,
  ViewStyle,
  TextStyle
} from "react-native";

import { Brand } from "src/Brands";
import { CURRENT_BRAND } from "src/config";

type Style = RegisteredStyle<ViewStyle | TextStyle | ImageStyle>;

type BrandStyles<T extends string> = { [key in T]?: Style };

export interface InjectedProps<T extends string> {
  brandStyles: BrandStyles<T>;
}

export const brandedStylesHOC = <OriginalProps extends {}, T extends string>(
  Component: React.ComponentType<OriginalProps & InjectedProps<T>>,
  stylesMap: { [key in Brand]: BrandStyles<T> }
) => {
  type Props = Pick<
    OriginalProps,
    Exclude<keyof OriginalProps, keyof InjectedProps<T>>
  >;

  return class BrandedStylesHOC extends React.Component<Props> {
    static displayName = `BrandedStylesHOC(${Component.displayName ||
      Component.name})`;

    render() {
      return (
        <Component brandStyles={stylesMap[CURRENT_BRAND]} {...this.props} />
      );
    }
  };
};
