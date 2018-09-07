import { css } from "styled-components";

import { branded } from "src/branded";
import {
  COLORS as Brand1Colors,
  SIZES as Brand1Sizes
} from "src/styles/Brand1_styles";
import { COLORS as Brand2Colors } from "src/styles/Brand2_styles";

const BaseCTAButton = css`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Brand1_CTAButton = css`
  ${BaseCTAButton};
  padding: 8px 20px;
  background-color: ${Brand1Colors.primary};
  border-radius: ${Brand1Sizes.borderRadius};
`;

const Brand2_CTAButton = css`
  ${BaseCTAButton};
  padding: 10px 20px;
  background-color: ${Brand2Colors.primary};
`;

export const CTAButton = branded({
  Brand1: Brand1_CTAButton,
  Brand2: Brand2_CTAButton
});
