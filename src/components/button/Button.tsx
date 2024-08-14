import React, {useMemo} from 'react';
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import presets, {additionalStyles, ButtonPresets} from './Button.presets';
import {Icon, IconName} from '../images';
import {ContainerRow} from '../styled/ContainerRow';

export interface IButtonProps extends TouchableOpacityProps {
  title: string;
  titleStyle?: TextStyle;
  isLoading?: boolean;
  preset?: ButtonPresets;
  icon?: IconName;
  iconSize?: number;
}

export const Button: React.FC<IButtonProps> = ({
  title,
  titleStyle,
  style,
  preset = 'primary',
  disabled,
  icon,
  iconSize,
  isLoading,
  ...rest
}) => {
  const styles = useMemo(
    () => [
      presets[preset],
      disabled && additionalStyles[`${preset}DisabledPresetContainer`],
      style,
    ],
    [preset, disabled, style],
  );

  const titleStyles = useMemo(
    () => [
      additionalStyles[`${preset}PresetTitle`],
      disabled && additionalStyles[`${preset}DisabledPresetTitle`],
      titleStyle,
    ],
    [preset, disabled, titleStyle],
  );

  return (
    <TouchableOpacity {...rest} style={styles} disabled={disabled}>
      <ContainerRow>
        {icon && <Icon size={iconSize ? iconSize : 17} name={icon} />}
        {isLoading ? (
          <ActivityIndicator size={iconSize} />
        ) : (
          <Text style={titleStyles}>{title}</Text>
        )}
      </ContainerRow>
    </TouchableOpacity>
  );
};
