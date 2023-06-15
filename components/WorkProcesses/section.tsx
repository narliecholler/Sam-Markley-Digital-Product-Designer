import React, { useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ProcessItem from '@/components/WorkProcesses/process';
import WordSplit from '@/components/WordSplit/WordSplit';
import workProcesses from 'lib/constants';
import { Process } from './style';

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#workingProcesses',
        markers: true,
        scrub: 1,
      },
    });

    timeline.to('#workingProcessesContainer', {
      position: 'sticky',
      top: '20%',
    });

    const cards = gsap.utils.toArray('.card > div > p');

    cards.forEach((card, index) => {
      timeline.to(card, {
        display: 'block',
      });

      timeline.to(card, {
        display: 'none',
      });
    });

    // gsap.utils.toArray('.card').forEach((card) => {
    //   gsap.to(card, {
    //     scrollTrigger: {
    //       trigger: card,
    //       start: 'top 30%',
    //       end: 'bottom',
    //     },
    //   });
    // });

    // cards.forEach((i) => {
    //   gsap.to(cards, {
    //     display: 'none',
    //     scrollTrigger: {
    //       trigger: '.processes',
    //       markers: true,
    //       end: cards,
    //       // scrub: 1,
    //       // start: 'top top',
    //     },
    //   });
    // });

    // gsap.to(cards, {
    //   display: 'none',
    //   scrollTrigger: {
    //     trigger: '.processes',
    //     markers: true,
    //     end: cards,
    //     // scrub: 1,
    //     // start: 'top top',
    //   },
    // });

    // timeline.to('.workingProcesses', { display: 'block' });
  }, []);

  const toggleProcess =
    (id: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setOpenProcess(id !== openProcess ? id : undefined);
    };

  return (
    <>
      <div className="processes">
        {workProcesses.map((i) => (
          <Process key={`${i.id}`} className="card">
            <ProcessItem title={i.title} text={i.text} />
          </Process>
        ))}
      </div>
    </>
  );
};

export default WorkProcesses;
