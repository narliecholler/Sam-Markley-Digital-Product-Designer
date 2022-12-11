import { useState } from "react";
import { ProcessWrapper } from "./style";

interface Props {
  title: string;
  text: string;
}

const Process = ({ title, text }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAccordion = () => {
    setIsOpen(!isOpen);
  };

  console.log("isOpen", isOpen);
  return (
    <ProcessWrapper onClick={() => openAccordion()}>
      <h4>{title}</h4>
      <p style={{ display: `${isOpen ? "block" : "none"}` }}>{text}</p>
    </ProcessWrapper>
  );
};

export default Process;
