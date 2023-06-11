import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Process from '@/components/Process';
import WordSplit from '@/components/WordSplit/WordSplit';
import workProcesses from 'lib/constants';
// import { ProcessSection } from './style';

const WorkProcesses = () => {
  const [openProcess, setOpenProcess] = useState<number | undefined>(undefined);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const timeline = gsap.timeline();

  // timeline.set(".wordSplit", {
  //   "will-change": "opacity, transform",
  //   opacity: 0,
  //   scale: 0.6,
  //   rotationZ: () => gsap.utils.random(-20, 20),
  // });

  // timeline.to(".wordSplit", {
  //   ease: "power4",
  //   opacity: 1,
  //   scale: 1,
  //   rotation: 0,
  //   stagger: 0.4,
  //   scrollTrigger: {
  //     trigger: ".processes",
  //     start: "bottom",
  //     end: "+=50%",
  //     scrub: 2,
  //   },
  // });

  //   gsap.set('.cards', { position: 'absolute' });

  //   timeline.from('.cards', {
  //     top: 500,
  //     stagger: 1,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: '.wrapper',
  //       start: 'top 12%',
  //       end: '4000px',
  //       scrub: 2,
  //       pin: true,
  //     },
  //   });

  //   timeline.to('.processHeading', {
  //     opacity: 0,
  //   });
  // }, []);

  const toggleProcess =
    (id: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setOpenProcess(id !== openProcess ? id : undefined);
    };

  return (
    <>
      {/* <ProcessSection className="processes">
        <div className="wrapper">
          {workProcesses.map((i, index) => (
            <div
              key={`${i.id}`}
              className="cards"
              // style={{ top: `${(index + 1) * 5}rem` }}
            >
              <Process
                title={i.title}
                text={i.text}
                className="card"
                onClick={(e) => toggleProcess(i.id)(e)}
              />
            </div>
          ))}
        </div>
      </ProcessSection> */}
    </>
  );
};

export default WorkProcesses;
