import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

const BASE: ViewStyle = {
  paddingVertical: 16,
  borderRadius: 8,
  alignItems: 'center',
  backgroundColor: '#30B0C7',
  borderWidth: 1,
  borderColor: '#30B0C7',
};

interface IButtonStyles {
  primary: ViewStyle;

  text: ViewStyle;
}

interface IButtonAdditionalStyles {
  primaryPresetTitle: TextStyle;
  primaryDisabledPresetTitle: TextStyle;
  primaryDisabledPresetContainer: ViewStyle;

  textPresetTitle: TextStyle;
  textDisabledPresetTitle: TextStyle;
  textDisabledPresetContainer: ViewStyle;
}

export type ButtonPresets = keyof IButtonStyles;

export const additionalStyles = StyleSheet.create<IButtonAdditionalStyles>({
  primaryPresetTitle: {
    color: 'white',
    fontSize: 19,
    lineHeight: 24,
    fontFamily: 'Inter-Regular',
    fontWeight: '600',
  },
  primaryDisabledPresetTitle: {
    color: 'white',
    fontFamily: 'Inter-Regular',
  },
  primaryDisabledPresetContainer: {
    backgroundColor: '#30B0C7',
    borderColor: '#30B0C7',
  },

  textPresetTitle: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'Inter-Regular',
    fontWeight: '600',
  },
  textDisabledPresetTitle: {},
  textDisabledPresetContainer: {},
});

export default StyleSheet.create<IButtonStyles>({
  primary: BASE,

  text: {
    ...BASE,
    borderRadius: 8,
    borderColor: '#C4C5C6',
    backgroundColor: 'white',
  },
});
