import UseAnimations from 'react-useanimations';
import mail from 'react-useanimations/lib/mail';
import { ButtonWrapper, IconWrapper } from './button.styles';

const Button = ({ text = 'Contact', fullWidth = false }) => (
  <UseAnimations
    animation={mail}
    size={32}
    strokeColor="#F1F1F1"
    render={(eventProps, animationProps) => (
      <>
        <ButtonWrapper type="button" {...eventProps} fullWidth={fullWidth}>
          <IconWrapper {...animationProps} />
          <p>{text}</p>
        </ButtonWrapper>
      </>
    )}
  />
);

export default Button;
