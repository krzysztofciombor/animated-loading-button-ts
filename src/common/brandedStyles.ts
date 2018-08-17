import { CURRENT_BRAND } from "src/config";
import { Brand } from "src/Brands";

interface BrandStyle {
  borderRadius?: number;
}

type StyleName = keyof BrandStyle;

const brand1Styles: BrandStyle = {
  borderRadius: 2
};

const brand2Styles: BrandStyle = {
};

const brandedStyles: { [key in Brand]: BrandStyle } = {
  Brand1: brand1Styles,
  Brand2: brand2Styles
};

export const getBrandedStyle = (brand: Brand, styleName: StyleName) => {
  return brandedStyles[brand][styleName];
};

export const getCurrentBrandStyle = (styleName: StyleName) => {
  return getBrandedStyle(CURRENT_BRAND, styleName);
};
