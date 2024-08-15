import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EStackName} from './config';
import {
  OtpCodeScreen,
  SignInScreen,
  SignUpScreen,
  WelcomeScreen,
} from '../screens';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  OtpCodeScreen: {code: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={EStackName.Welcome}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={EStackName.Welcome} component={WelcomeScreen} />
      <Stack.Screen name={EStackName.SignIn} component={SignInScreen} />
      <Stack.Screen name={EStackName.SignUp} component={SignUpScreen} />
      <Stack.Screen name={EStackName.OtpCode} component={OtpCodeScreen} />
    </Stack.Navigator>
  );
};
