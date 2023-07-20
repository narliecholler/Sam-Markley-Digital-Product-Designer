import UseAnimations from 'react-useanimations';
import mail from 'react-useanimations/lib/mail';
import { Icon } from '@/components/Icon';
import { theme } from 'theme/theme';
import { ButtonWrapper, IconWrapper } from './button.styles';

type ButtonProps = {
  stroke: 'dark' | 'light';
  icon?: 'mail' | 'send';
  fullWidth?: boolean;
};

const Button = ({
  stroke = 'dark',
  icon = 'mail',
  fullWidth = false,
}: ButtonProps) => {
  // button without library icon.
  if (icon === 'send') {
    return (
      <ButtonWrapper
        color={stroke}
        type="button"
        fullWidth={fullWidth}
        href="/contact"
      >
        <Icon type="send" />
        <p>Contact</p>
      </ButtonWrapper>
    );
  }

  // button with animated library icons.
  return (
    <UseAnimations
      animation={mail}
      size={32}
      render={(eventProps, animationProps) => (
        <ButtonWrapper
          as="a"
          href="/contact"
          type="button"
          color={stroke}
          fullWidth={fullWidth}
          {...eventProps}
        >
          <IconWrapper {...animationProps} />
          <p>Contact</p>
        </ButtonWrapper>
      )}
    />
  );
};

export default Button;
