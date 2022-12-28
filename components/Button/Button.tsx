import ButtonWrapper from "./style";

type ImageProps = {
  url: string;
  height: string;
  width: string;
  altText: string;
  color: string;
};

type ButtonProps = {
  icon?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  text: string;
  bgColor?: string | any;
};

const Button = ({
  icon,
  onMouseEnter,
  onMouseLeave,
  text,
  bgColor = "black",
}: ButtonProps) => {
  return (
    <ButtonWrapper
      bgColor={bgColor}
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon}
      {text}
    </ButtonWrapper>
  );
};

export default Button;
