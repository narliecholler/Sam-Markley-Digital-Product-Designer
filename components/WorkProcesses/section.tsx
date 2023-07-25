import React, { useState, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ProcessItem from '@/components/WorkProcesses/process';
import ProgressBar from '@/components/ProgressBar';
import workProcesses from 'lib/constants';
import { WorkingProcessWrapper, Process } from './style';

const WorkProcesses = () => {
  const [openProcess, setOpenProcess] = useState<number | undefined>(undefined);
  const [progress, setProgress] = useState<number>(0);
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

  // get percentage for progress bar.
  // useEffect(() => {

  // }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#workingProcesses',
        markers: true,
        scrub: true,
        start: '+=10%',
      },
    });

    timeline.to('#workingProcessesContainer', {
      position: 'sticky',
      top: '12%',
    });

    // const cards = gsap.utils.toArray('.card > div > p') as Element[];
    const cardsWrapper = gsap.utils.toArray('.card') as Element[];

    // cardsWrapper.forEach((x) => {
    //   timeline.to(x, {
    //     transform: 'scale(1)',
    //   });
    //   timeline.to(x, {
    //     transform: 'scale(0.8)',
    //   });
    // });

    cardsWrapper.forEach((card) => {
      // timeline.from

      timeline.to(card.querySelector('div > p'), {
        display: 'block',
        onStart: () => {
          card.classList.add('open');
        },
      });

      timeline.to(card.querySelector('div > p'), {
        display: 'none',
        onComplete: () => {
          card.classList.remove('open');
        },
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

  useEffect(() => {
    const openElements = document && document.querySelector('.open');
  }, []);

  return (
    <WorkingProcessWrapper>
      <ProgressBar percentage={20} />
      <h2>Working Processes</h2>
      {workProcesses.map((i, index) => (
        <Process key={`${i.id}`} className="card">
          <ProcessItem
            title={i.title}
            text={i.text}
            className={`card-item-${index + 1}`}
          />
        </Process>
      ))}
    </WorkingProcessWrapper>
  );
};

export default WorkProcesses;
