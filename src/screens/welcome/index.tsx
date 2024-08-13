import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from '../../components/images';

export const WelcomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      }}>
      <Icon name="welcome_icon" size={422} />
      <Text>Welcome to App</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet phasellus
        augue. Neque at felis pulvinar malesuada varius egestas dis cras.
      </Text>
    </View>
  );
};
