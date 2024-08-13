import React from 'react';

import WelcomeIcon from '../../assets/svg/welcome_icon.svg';

export type IconName = 'welcome_icon';

interface IconProps {
  name: IconName;
  size: number;
}

export const Icon: React.FC<IconProps> = ({name, size}) => {
  switch (name) {
    case 'welcome_icon':
      return <WelcomeIcon width={size} height={size} />;
  }
};
