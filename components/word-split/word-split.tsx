import SplitWordHeading from './style';

type WordSplitProps = {
  heading: string;
  className?: string;
};

const WordSplit = ({ heading, className }: WordSplitProps) => (
  <SplitWordHeading className={className}>
    {heading.split('').map((item, index) => (
      <span className="wordSplit" key={`${item}_${index}`}>
        {item}
      </span>
    ))}
  </SplitWordHeading>
);

export default WordSplit;
