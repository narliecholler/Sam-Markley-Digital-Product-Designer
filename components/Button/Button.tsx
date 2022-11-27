import ButtonWrapper from "./style";

type ButtonProps = {
  icon?: React.ReactNode;
  text: string;
};

const Button = ({ icon, text }: ButtonProps) => {
  return (
    <ButtonWrapper>
      {/* <img src={icon} /> */}
      {text}
    </ButtonWrapper>
  );
};

export default Button;
