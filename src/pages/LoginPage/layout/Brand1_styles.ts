import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "src/styles/Brand1_styles";

export const Brand1_styles = StyleSheet.create({
  CTA_base: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: SIZES.borderRadius
  },
  CTA_pressed: {
    backgroundColor: "green"
  },
  CTA_disabled: {
    backgroundColor: "lightblue"
  },
  CTA_text: {
    color: "white",
    fontWeight: "600",
    fontSize: 16
  }
});
