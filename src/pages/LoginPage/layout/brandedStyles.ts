import { StyleSheet } from "react-native";

import { branded } from "src/branded";
import {
  COLORS as Brand1Colors,
  SIZES as Brand1Sizes
} from "src/styles/Brand1_styles";
import { COLORS as Brand2Colors } from "src/styles/Brand2_styles";
import { Style } from "src/styles/types";

interface Styles {
  CTA_base: Style;
  CTA_pressed?: Style;
  CTA_disabled?: Style;
  CTA_text: Style;
}

const common: Styles = {
  CTA_base: {
    alignItems: "center",
    justifyContent: "center"
  },
  CTA_text: {
    color: "white"
  }
};

const Brand1_styles: Styles = {
  CTA_base: {
    ...common.CTA_base,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: Brand1Colors.primary,
    borderRadius: Brand1Sizes.borderRadius
  },
  CTA_pressed: {
    backgroundColor: "green"
  },
  CTA_disabled: {
    backgroundColor: "lightblue"
  },
  CTA_text: {
    ...common.CTA_text,
    fontSize: 16,
    fontWeight: "600"
  }
};

const Brand2_styles: Styles = {
  CTA_base: {
    ...common.CTA_base,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Brand2Colors.primary
  },
  CTA_disabled: {
    backgroundColor: "silver"
  },
  CTA_text: {
    ...common.CTA_text,
    fontWeight: "bold"
  }
};

export const brandStyles = StyleSheet.create(
  branded({
    Brand1: Brand1_styles,
    Brand2: Brand2_styles
  })
);
