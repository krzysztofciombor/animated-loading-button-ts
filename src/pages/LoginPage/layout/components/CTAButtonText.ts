import { brandedHOC } from "src/brandedHOC";
import styled from "styled-components/native";

const BaseCTAButtonText = styled.Text`
  color: white;
`;

const Brand1_CTAButtonText = styled(BaseCTAButtonText)`
  font-weight: 600;
  font-size: 16px;
`;

const Brand2_CTAButtonText = styled(BaseCTAButtonText)`
  font-weight: bold;
`;

export const CTAButtonText = brandedHOC({
  Brand1: Brand1_CTAButtonText,
  Brand2: Brand2_CTAButtonText
});
