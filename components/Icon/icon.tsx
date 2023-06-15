import Image from 'next/image';
import UseAnimations from 'react-useanimations';
import { theme } from 'theme/theme';
import iconResources from './assets';

type IconProps = {
  type: keyof typeof iconResources;
  onClick?: () => void;
};

// interface AnimatedButtonProps extends Omit<IconProps, 'onClick'>

export const Icon = ({ type, onClick }: IconProps) => {
  if (!type) return null;

  return (
    <Image
      src={iconResources[type]}
      alt="icon"
      width={24}
      height={24}
      onClick={onClick}
    />
  );
};

export const AnimatedIcon = ({ type }: any) => (
  <UseAnimations
    animation={type}
    size={32}
    strokeColor={theme.colors.black as unknown as string}
  />
);
