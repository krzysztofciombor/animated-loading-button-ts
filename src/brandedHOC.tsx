import React from "react";

import { Brand } from "src/Brands";
import { CURRENT_BRAND } from "src/config";

interface State {
  isKeyboardShowing: boolean;
}

export const brandedHOC = <OriginalProps extends {}>(
  ComponentsMap: { [key in Brand]: React.ComponentType<OriginalProps> }
) => {
  const Component = ComponentsMap[CURRENT_BRAND];
  return class BrandedHOC extends React.Component<OriginalProps, State> {
    static displayName = `BrandedHOC(${Component.displayName ||
      Component.name})`;

    render() {
      return <Component {...this.props} />;
    }
  };
};
