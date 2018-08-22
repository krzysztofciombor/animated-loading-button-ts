import { StyleSheet } from "react-native";
import { COLORS } from "src/styles/Brand2_styles";

export const Brand2_styles = StyleSheet.create({
  CTA_base: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  CTA_disabled: {
    backgroundColor: "silver"
  },
  CTA_text: {
    color: "white",
    fontWeight: "bold"
  }
});
