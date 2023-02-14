import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { SplitWordHeading } from "./style";

type WordSplitProps = {
  heading: string;
  className?: string;
};

const WordSplit = ({ heading, className }: WordSplitProps) => {
  return (
    <SplitWordHeading className={className}>
      {heading.split("").map((item, index) => {
        return (
          <span className="wordSplit" key={`${item}_${index}`}>
            {item}
          </span>
        );
      })}
    </SplitWordHeading>
  );
};

export default WordSplit;
