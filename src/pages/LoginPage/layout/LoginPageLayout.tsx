import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import AnimatedLoadingButton from "src/AnimatedLoadingButton";
import { BaseButton, BaseLoadingIndicator } from "src/components/common";
import FBLoginButton from "src/components/FBLoginButton";

import { CTAButton } from "./components/CTAButton";
import { CTAButtonText } from "./components/CTAButtonText";

interface Props {
  isLoading: boolean;
  onSignInPress: () => void;
  onFbSignInPress: () => void;
}

export class LoginPageLayout extends React.Component<Props> {
  render() {
    const { isLoading, onSignInPress, onFbSignInPress } = this.props;

    return (
      <Container>
        <Row>
          <AnimatedLoadingButton
            block
            isLoading={isLoading}
            renderButton={
              <BaseButton
                onPress={onSignInPress}
                baseStyle={CTAButton}
                activeOpacity={0.8}
              >
                <CTAButtonText>Sign In</CTAButtonText>
              </BaseButton>
            }
            renderLoading={
              <BaseLoadingIndicator color="red" spinnerColor="white" />
            }
          />
        </Row>
        <View style={{ height: 20 }} />
        <Row>
          <FBLoginButton onPress={onFbSignInPress} />
        </Row>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const Row = styled.View`
  flex-direction: row;
`;
