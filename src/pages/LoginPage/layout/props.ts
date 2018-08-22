import { Brand1_styles } from "./Brand1_styles";
import { Brand2_styles } from "./Brand2_styles";

export type BrandedStyles =
  | keyof typeof Brand1_styles
  | keyof typeof Brand2_styles;

export interface Props {
  isLoading: boolean;
  onSignInPress: () => void;
  onFbSignInPress: () => void;
}
