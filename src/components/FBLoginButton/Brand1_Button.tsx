import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { css } from "styled-components";
import styled from "styled-components/native";

import BaseButton from "src/components/common/BaseButton";
import { Props } from "./props";

export const Brand1_Button: React.SFC<Props> = props => (
  <BaseButton baseStyle={baseStyle} disabledStyle={disabledStyle} {...props}>
    <FontAwesome name="facebook-official" color="white" size={24} />
    <Spacer />
    <FBText>Sign in with Facebook</FBText>
    <Spacer />
  </BaseButton>
);

const baseStyle = css`
  background-color: blue;
  padding: 10px;
  border-radius: 2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const disabledStyle = css`
  background-color: lightblue;
`;

const FBText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

const Spacer = styled.View`
  flex: 1;
`;
