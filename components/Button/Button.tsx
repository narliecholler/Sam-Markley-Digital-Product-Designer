import { ButtonWrapper, IconWrapper } from "./style";
import { ButtonProps } from "./types";
import UseAnimations from "react-useanimations";
import mail from "react-useanimations/lib/mail";

const Button = () => {
  return (
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
};

export default Button;
