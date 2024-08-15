import {Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components';

export const TextDecorate = styled(Text)`
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #00d1ac;
  color: #00d1ac;
  font-family: 'Inter-Regular';
  font-weight: 600;
  margin-left: 8px;
`;

export const InputContainer = styled(View)<{error: boolean}>`
  border: 1px solid ${({error}) => (error ? 'red' : '#D0D5DD')};
  padding: 14px;
  margin-bottom: 14px;
  border-radius: 8px;
`;

export const StyledKeyboardAwareScrollView = styled(
  KeyboardAwareScrollView,
).attrs({
  scrollEnabled: false,
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
})`
  flex-grow: 1;
`;
