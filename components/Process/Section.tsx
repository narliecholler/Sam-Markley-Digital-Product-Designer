import { useLayoutEffect, useRef } from "react";
import Script from "next/script";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Process from "@/components/Process";
import WordSplit from "@/components/WordSplit/WordSplit";
import { workProcesses } from "utils/constants";
import { ProcessSection, BackgroundContainer } from "./style";

const WorkProcesses = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline();

    gsap.set(".cards", { position: "absolute" });

    timeline.from(".cards", {
      top: 500,
      stagger: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top 15%",
        end: "4000px",
        scrub: 2,
        pin: true,
      },
    });
  }, []);

  return (
    <>
      <ProcessSection className="processes">
        {/* <WordSplit heading="The Working Process" /> */}
        <BackgroundContainer />
        <div className="wrapper">
          {workProcesses.map((i, index) => (
            <div
              key={`${i.text}_${index}`}
              className="cards"
              style={{ top: `${(index + 1) * 5}rem` }}
            >
              <Process
                key={`${i.text}_${index}`}
                title={i.title}
                text={i.text}
                className="card"
              />
            </div>
          ))}
        </div>
      </ProcessSection>
    </>
  );
};

export default WorkProcesses;
