import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { SplitWordHeading } from "./style";

type WordSplitProps = {
  heading: string;
};

const WordSplit = ({ heading }: WordSplitProps) => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.registerPlugin(CSSRulePlugin);

  //   gsap.set(".wordSplit", {
  //     "will-change": "opacity, transform",
  //     opacity: 0,
  //     scale: 0.6,
  //     rotationZ: () => gsap.utils.random(-20, 20),
  //   });
  //   gsap.to(".wordSplit", {
  //     ease: "power4",
  //     opacity: 1,
  //     scale: 1,
  //     rotation: 0,
  //     stagger: 0.4,
  //     scrollTrigger: {
  //       trigger: ".processes",
  //       start: "center+=40% bottom",
  //       end: "+=50%",
  //       scrub: true,
  //       // pin: ".headingSplit",
  //     },
  //   });
  // }, []);

  return (
    <SplitWordHeading className="headingSplit">
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
