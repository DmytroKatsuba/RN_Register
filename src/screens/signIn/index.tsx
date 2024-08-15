import React from 'react';
import {Styled} from '../../components/styled';
import {Button} from '../../components/button/Button';
import {
  InputContainer,
  StyledKeyboardAwareScrollView,
  TextDecorate,
} from './styled';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Root';
import {useLogin} from '../../hooks';
import {PhoneField} from './PhoneField';

export const SignInScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSignUp = () => navigation.navigate('SignUpScreen');

  const {loading, onSubmit, control, errors} = useLogin();

  return (
    <Styled.Container justify="center" align="center">
      <StyledKeyboardAwareScrollView>
        <Styled.Display>Welcome to App</Styled.Display>
        <Styled.Body1 align="center" color="#667085" mTop="20px" mBottom="20px">
          Please enter your details.
        </Styled.Body1>
        <Styled.Body1 color="#667085" mBottom="10px">
          Phone number
        </Styled.Body1>
        <InputContainer error={!!errors.phone?.message}>
          <PhoneField control={control} error={errors.phone?.message} />
        </InputContainer>
        {errors.phone?.message ? (
          <Styled.Body1 align="center" color="#e02626" mBottom="20px">
            {errors.phone?.message}
          </Styled.Body1>
        ) : null}
        <Button
          preset="primary"
          title={'Login'}
          onPress={onSubmit}
          disabled={loading}
          isLoading={loading}
        />
        <Styled.FlexWrapper mTop="20px">
          <Styled.Body1 color="#667085" align="center">
            Don’t have an account?
          </Styled.Body1>
          <TextDecorate onPress={onSignUp}>Sign up</TextDecorate>
        </Styled.FlexWrapper>
      </StyledKeyboardAwareScrollView>
    </Styled.Container>
  );
};
