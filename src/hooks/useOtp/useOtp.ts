import axios from 'axios';
import {useState} from 'react';
import {base_url} from '../../consts/consts';
import {Alert} from 'react-native';

export const useOtp = (code: string) => {
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const checkCode = value.length >= 6 ? code === value : true;
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/signIn`);
      setLoading(false);
      if (response.status === 200) {
        Alert.alert('Hello');
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    value,
    setValue,
    checkCode,
    loading,
    fetchData,
  };
};
