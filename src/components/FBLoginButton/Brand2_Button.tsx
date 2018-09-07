import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { css } from "styled-components";
import styled from "styled-components/native";

import BaseButton from "src/components/common/BaseButton";
import { Props } from "./props";

export const Brand2_Button: React.SFC<Props> = props => (
  <BaseButton baseStyle={baseStyle} {...props}>
    <FontAwesome name="facebook" color="blue" size={20} />
    <View style={{ width: 16 }} />
    <FBText>LOGIN WITH FACEBOOK</FBText>
  </BaseButton>
);

const baseStyle = css`
  border-color: blue;
  border-width: 1px;
  background-color: white;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const FBText = styled.Text`
  color: blue;
  font-weight: bold;
`;
