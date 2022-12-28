import { forwardRef, useEffect, useRef, useState } from "react";
import { ProcessWrapper } from "./style";

interface Props {
  title: string;
  text: string;
  className: string;
}

const Process = ({ className, title, text }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  // const openAccordion = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <ProcessWrapper
      id={`process_${title.toLocaleLowerCase()}`}
      className={className}
      // onClick={() => openAccordion()}
    >
      <h4>{title}</h4>
      <p style={{ display: `${isOpen ? "block" : "none"}` }}>{text}</p>
    </ProcessWrapper>
  );
};
Process.displayName = "Process";

export default Process;
