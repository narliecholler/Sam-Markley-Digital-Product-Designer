import UseAnimations from 'react-useanimations';
import mail from 'react-useanimations/lib/mail';
import { ButtonWrapper, IconWrapper } from './style';

const Button = () => (
  <UseAnimations
    animation={mail}
    size={32}
    strokeColor="#F1F1F1"
    render={(eventProps, animationProps) => (
      <ButtonWrapper type="button" {...eventProps}>
        <IconWrapper {...animationProps} />
        <p>Contact</p>
      </ButtonWrapper>
    )}
  />
);

export default Button;
