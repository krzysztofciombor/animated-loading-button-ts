import LoginPageLayout from "./LoginPageLayout";
import { Brand1_styles } from "./Brand1_styles";
import { Brand2_styles } from "./Brand2_styles";
import { brandedStylesHOC as brandedStyles } from "src/brandedStylesHOC";

export default brandedStyles(LoginPageLayout, {
  Brand1: Brand1_styles,
  Brand2: Brand2_styles
});
