import React from 'react';
import {Icon} from '../../components/images';
import {Button} from '../../components/button/Button';
import {Styled} from '../../components/styled';
import {ButtonContainer} from './styled';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Root';

export const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSignIn = () => navigation.navigate('SignInScreen');
  const onSignUp = () => navigation.navigate('SignUpScreen');

  return (
    <Styled.Container justify="space-between">
      <Icon name="welcome_icon" size={400} />
      <Styled.Display>Welcome to App</Styled.Display>
      <Styled.Body1>
        Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet phasellus
        augue. Neque at felis pulvinar malesuada varius egestas dis cras.
      </Styled.Body1>
      <ButtonContainer>
        <Button preset="primary" title={'Login'} onPress={onSignIn} />
        <Button preset="text" title={'Register'} onPress={onSignUp} />
      </ButtonContainer>
    </Styled.Container>
  );
};
