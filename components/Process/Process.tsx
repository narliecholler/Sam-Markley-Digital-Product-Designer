import { useState } from "react";
import { ProcessWrapper } from "./style";

interface Props {
  title: string;
  text: string;
  className: string;
}

const Process = ({ className, title, text }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ProcessWrapper
      id={`process_${title.toLocaleLowerCase()}`}
      className={className}
    >
      <h3>{title}</h3>
      <p style={{ display: `${isOpen ? "block" : "none"}` }}>{text}</p>
    </ProcessWrapper>
  );
};
Process.displayName = "Process";

export default Process;
