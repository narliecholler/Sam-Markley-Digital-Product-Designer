import { ProcessWrapper } from './style';

interface Props {
  title: string;
  text: string;
  className: string;
}

const Process = ({ className, title, text }: Props) => (
  <ProcessWrapper
    id={`process_${title.toLocaleLowerCase()}`}
    className={className}
  >
    <h3>{title}</h3>
    <p>{text}</p>
  </ProcessWrapper>
);

export default Process;
