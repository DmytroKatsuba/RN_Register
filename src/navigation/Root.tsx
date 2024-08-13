import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EStackName} from './config';
import {WelcomeScreen} from '../screens';

export type RootStackParamList = {
  WelcomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={EStackName.Welcome}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={EStackName.Welcome} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
