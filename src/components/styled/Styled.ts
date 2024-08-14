import {FONT, MARGIN, TFlexWrapper, THr, TStyledTextProps} from './types';
import {Text, View} from 'react-native';
import styled, {css} from 'styled-components';

const StyledText = styled(Text)<TStyledTextProps>`
  ${FONT({})}
  ${props => css`
    ${MARGIN(props)}

    color: ${props.color || (props.theme.isWhite ? 'white' : 'black')};

    text-align: ${props.align || 'auto'};
  `}
`;

export const H1 = styled(StyledText)`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Inter-SemiBold';
`;

export const H2 = styled(StyledText)`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Inter-SemiBold';
`;

export const H3 = styled(StyledText)`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Inter-SemiBold';
`;

export const Body1SemiBold = styled(StyledText)`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Inter-SemiBold';
`;

export const Body2SemiBold = styled(StyledText)`
  font-size: 14px;
  font-weight: 600;
  font-family: 'Inter-SemiBold';
`;

export const Body1 = styled(StyledText)`
  font-size: 16px;
  font-family: 'Inter-Regular';
`;

export const Body2 = styled(StyledText)`
  font-size: 14px;
  font-family: 'Inter-Regular';
`;

export const Caption = styled(StyledText)`
  font-size: 12px;
  font-family: 'Inter-Regular';
`;

export const Display = styled(StyledText)`
  font-size: 32px;
  font-family: 'Inter-Regular';
  font-weight: 600;
`;

export const FlexWrapper = styled(View)<TFlexWrapper>`
  display: flex;
  width: ${({width}) => width || '100%'};
  height: ${({height}) => height || 'auto'};
  flex-direction: ${({flexDirection}) => flexDirection || 'row'};
  align-items: ${({align}) => align || 'center'};
  justify-content: ${({justify}) => justify || 'center'};
  flex-wrap: ${({wrap}) => wrap || 'nowrap'};
  max-width: 100%;

  ${props => MARGIN(props)}
`;

export const Hr = styled(View)<THr>`
  width: 100%;
  height: 1px;
  background-color: ${({color, theme}) =>
    color || (theme.isWhite ? '#C4C5C6' : '#30B0C7')};

  ${({vertical}) =>
    vertical &&
    css`
      width: 1px;
      height: 100%;
    `}

  ${props => MARGIN(props)}
`;
