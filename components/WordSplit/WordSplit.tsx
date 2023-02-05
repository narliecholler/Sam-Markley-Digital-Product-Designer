import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";

type WordSplitProps = {
  heading: string;
};

const WordSplit = ({ heading }: WordSplitProps) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSRulePlugin);
    // const words = .querySelectorAll('.wordSplit');
    // const words = gsap.utils.selector(".wordSplit");

    gsap.set(".wordSplit", {
      "will-change": "opacity, transform",
      opacity: 0,
      scale: 0.6,
      rotationZ: () => gsap.utils.random(-20, 20),
    });
    gsap.to(".wordSplit", {
      ease: "power4",
      opacity: 1,
      scale: 1,
      rotation: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".headingSplit",
        start: "center+=20% bottom",
        end: "+=50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <h3 className="headingSplit">
      {heading.split("").map((item, index) => {
        return (
          <span className="wordSplit" key={`${item}_${index}`}>
            {item}
          </span>
        );
      })}
    </h3>
  );
};

export default WordSplit;
