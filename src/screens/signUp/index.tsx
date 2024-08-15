import React from 'react';
import {Styled} from '../../components/styled';
import {StyledKeyboardAwareScrollView, TextDecorate} from '../signIn/styled';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Root';
import {SignUpForm} from './SignUpForm';
import {useSignUp} from '../../hooks';

export const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {onSignUp, loading} = useSignUp();

  const onSignIn = () => navigation.navigate('SignInScreen');

  const defaultValues = {
    name: '',
    lastName: '',
    phone: '',
  };

  return (
    <Styled.Container justify="center" align="center">
      <StyledKeyboardAwareScrollView>
        <Styled.Display>Welcome to App</Styled.Display>
        <Styled.Body1 align="center" color="#667085" mTop="20px" mBottom="20px">
          Please enter your details.
        </Styled.Body1>
        <SignUpForm
          onSubmit={onSignUp}
          defaultValues={defaultValues}
          loading={loading}
        />
        <Styled.FlexWrapper mTop="20px">
          <Styled.Body1 color="#667085" align="center">
            Do you have an account?
          </Styled.Body1>
          <TextDecorate onPress={onSignIn}>Login</TextDecorate>
        </Styled.FlexWrapper>
      </StyledKeyboardAwareScrollView>
    </Styled.Container>
  );
};
