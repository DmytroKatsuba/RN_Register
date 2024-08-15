import {FlexStyle, TextStyle} from 'react-native';
import {css} from 'styled-components';

export type TStyledTextProps = {
  color?: string;
  align?: TextStyle['textAlign'];
} & TMargin;

export type TFlexWrapper = {
  width?: string;
  height?: string;
  flexDirection?: FlexStyle['flexDirection'];
  justify?: FlexStyle['justifyContent'];
  align?: FlexStyle['alignItems'];
  wrap?: FlexStyle['flexWrap'];
} & TMargin;

export type THr = TMargin & {
  color?: string;
  vertical?: boolean;
};

export const FONT = ({
  color = 'black',
  size = '16px',
  weight = '400',
  font = 'Inter-Regular',
  align = 'left',
  style = 'normal',
}: TFONT) => {
  return css`
    font-family: '${font}';
    color: ${color};
    font-size: ${size};
    font-weight: ${weight};
    text-align: ${align};
    font-style: ${style};
  `;
};

export const MARGIN = ({
  mTop = '0px',
  mBottom = '0px',
  mRight = '0px',
  mLeft = '0px',
  pRight = '0px',
  pLeft = '0px',
}: TMargin) => {
  return css`
    margin-top: ${mTop};
    margin-bottom: ${mBottom};
    margin-left: ${mLeft};
    margin-right: ${mRight};
    padding-left: ${pLeft};
    padding-right: ${pRight};
  `;
};

export type TFONT = {
  color?: string;
  size?: string;
  align?: 'center' | 'left' | 'right';
  weight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  font?: 'Inter-Light' | 'Inter-Regular' | 'Inter-SemiBold';
  style?: 'normal' | 'italic';
};

export type TMargin = {
  mTop?: string;
  mLeft?: string;
  mRight?: string;
  mBottom?: string;
  pLeft?: string;
  pRight?: string;
};
