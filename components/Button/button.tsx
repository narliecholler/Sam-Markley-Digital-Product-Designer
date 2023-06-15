import UseAnimations from 'react-useanimations';
import mail from 'react-useanimations/lib/mail';
import { Icon } from '@/components/Icon';
import { theme } from 'theme/theme';
import { ButtonWrapper, IconWrapper } from './button.styles';

type ButtonProps = {
  icon: 'mail' | 'send';
  stroke: 'contrast' | 'light';
  fullWidth?: boolean;
};

const Button = ({
  icon = 'mail',
  stroke = 'contrast',
  fullWidth = false,
}: ButtonProps) => {
  if (icon === 'send') {
    return (
      <ButtonWrapper type="button" fullWidth={fullWidth}>
        <Icon
          type="send"
          // @ts-ignore
          stroke={stroke === 'light' ? theme.colors.white : theme.colors.black}
        />
        <p>Contact</p>
      </ButtonWrapper>
    );
  }

  return (
    <UseAnimations
      animation={mail}
      size={32}
      strokeColor="#F1F1F1"
      render={(eventProps, animationProps) => (
        <>
          <ButtonWrapper type="button" {...eventProps} fullWidth={fullWidth}>
            <IconWrapper {...animationProps} />
            <p>Contact</p>
          </ButtonWrapper>
        </>
      )}
    />
  );
};

export default Button;
