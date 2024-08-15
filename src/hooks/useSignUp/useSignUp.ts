import {useState} from 'react';
import {SignUpFormType} from '../../screens/signUp/SignUpForm';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Root';

export const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onOtpScreen = () =>
    navigation.navigate('OtpCodeScreen', {code: '123123'});

  const onSignUp = (data: SignUpFormType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOtpScreen();
    }, 2000);
  };

  return {
    onSignUp,
    loading,
  };
};
