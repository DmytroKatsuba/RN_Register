import {useState} from 'react';
import {SignUpFormType} from '../../screens/signUp/SignUpForm';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Root';
import axios from 'axios';
import {base_url} from '../../consts/consts';

export const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onOtpScreen = (code: string) =>
    navigation.navigate('OtpCodeScreen', {code});

  const onSignUp = async (data: SignUpFormType) => {
    setLoading(true);
    try {
      const response = await axios.post(`${base_url}signUp`, {...data});
      setLoading(false);
      onOtpScreen(response.data.code);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    onSignUp,
    loading,
  };
};
