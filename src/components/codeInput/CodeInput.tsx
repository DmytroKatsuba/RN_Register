import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styled from 'styled-components';
import {Styled} from '../styled';

const CELL_COUNT = 6;

interface CodeInputProps {
  value: string;
  setValue: (e: string) => void;
  check: boolean;
}
const Ceil = styled(View)<{index: number}>`
  width: 44px;
  height: 50px;
  border-radius: 8px;
  border-width: 1px;
  padding-top: 9px;
`;

export const CodeInput = ({check, value, setValue}: CodeInputProps) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <Fragment key={index}>
          <Ceil
            style={[styles.border, !check && styles.failCode]}
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            index={index}>
            <Styled.H1 align="center" color="#30B0C7">
              {symbol || (isFocused ? <Cursor /> : null)}
            </Styled.H1>
          </Ceil>
          {index === 2 ? (
            <View key={`separator-${index}`} style={styles.separator} />
          ) : null}
        </Fragment>
      )}
    />
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {marginTop: 20},
  separator: {
    height: 4,
    width: 10,
    backgroundColor: '#EEE8F0',
    alignSelf: 'center',
  },
  border: {
    borderColor: '#EEE8F0',
  },
  failCode: {
    borderColor: '#e70b0b',
  },
});
