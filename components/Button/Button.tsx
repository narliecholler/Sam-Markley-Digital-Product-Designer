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
  text: string;
  bgColor?: string | any;
};

const Button = ({ icon, text, bgColor = "black" }: ButtonProps) => {
  return (
    <ButtonWrapper bgColor={bgColor}>
      {icon}
      {text}
    </ButtonWrapper>
  );
};

export default Button;
