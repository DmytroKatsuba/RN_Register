import React from 'react';
import {Styled} from '../../components/styled';
import {StyledKeyboardAwareScrollView, TextDecorate} from '../signIn/styled';
import {CodeInput} from '../../components/codeInput/CodeInput';
import {Button} from '../../components/button/Button';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Root';
import {EStackName} from '../../navigation/config';
import {useOtp} from '../../hooks/useOtp/useOtp';

export const OtpCodeScreen = () => {
  const {params} =
    useRoute<RouteProp<RootStackParamList, EStackName.OtpCode>>();

  const {value, setValue, checkCode, fetchData, loading} = useOtp(params.code);

  return (
    <Styled.Container justify="center" align="center">
      <StyledKeyboardAwareScrollView>
        <Styled.Display>Welcome to App</Styled.Display>
        <Styled.Body1 align="center" color="#667085" mTop="20px" mBottom="20px">
          Enter the confirmation code that will be sent to you by SMS
        </Styled.Body1>

        <Styled.Body2>Secure Code</Styled.Body2>
        <CodeInput check={checkCode} value={value} setValue={setValue} />
        <Styled.FlexWrapper mTop="20px" mBottom="20px">
          <TextDecorate onPress={fetchData}>Resend the Code</TextDecorate>
        </Styled.FlexWrapper>
        <Button
          title="Sign up"
          onPress={fetchData}
          isLoading={loading}
          disabled={value.length < 6 || !checkCode}
        />
      </StyledKeyboardAwareScrollView>
    </Styled.Container>
  );
};
