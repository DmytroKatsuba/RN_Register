import React from 'react';
import {Styled} from '../../components/styled';
import {StyledKeyboardAwareScrollView, TextDecorate} from '../signIn/styled';

export const OtpCodeScreen = () => {
  return (
    <Styled.Container justify="center" align="center">
      <StyledKeyboardAwareScrollView>
        <Styled.Display>Welcome to App</Styled.Display>
        <Styled.Body1 align="center" color="#667085" mTop="20px" mBottom="20px">
          Enter the confirmation code that will be sent to you by SMS
        </Styled.Body1>

        <Styled.Body2>Secure Code</Styled.Body2>

        <Styled.FlexWrapper mTop="20px">
          <TextDecorate onPress={() => {}}>Resend the Code</TextDecorate>
        </Styled.FlexWrapper>
      </StyledKeyboardAwareScrollView>
    </Styled.Container>
  );
};
