import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/all';
// import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { SectionContainer } from '@/components/Template';
// import ProgressBar from '@/components/ProgressBar';
import { workProcesses } from 'lib/constants';
import ProcessItem from './process-card';
import { Wrapper, StaticWrapper, Process } from './work-process.style';

const WorkProcesses = () => {
  // const [openProcess, setOpenProcess] = useState<number | undefined>(undefined);
  // const [progress, setProgress] = useState<number>(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const smoother = ScrollSmoother.create({
    //   content: '[smooth-scrolling]',
    //   smooth: 3,
    //   normalizeScroll: true,
    //   ignoreMobileResize: true,
    //   effects: true,
    //   //preventDefault: true,
    //   //ease: 'power4.out',
    //   //smoothTouch: 0.1,
    // });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#test',
        scrub: true,
        // markers: true,
      },
    });

    gsap.set('.card', { position: 'absolute' });

    // ScrollTrigger.create({
    //   trigger,
    // });

    // const wrapper = gsap.utils.selector('#static-wrapper');
    const cardsWrapper = gsap.utils.toArray('.card') as Element[];

    // timeline.to('#static-wrapper', {
    //   scrollTrigger: {
    //     trigger: '#static-wrapper',
    //     start: () => 'top bottom-=100',
    //     end: () => 'center top+=',
    //     scrub: true,
    //     markers: true,
    //     invalidateOnRefresh: true,
    //   },
    // });

    cardsWrapper.forEach((card, index) => {
      timeline
        // .from(card, {
        //   yPercent: 4000,
        //   stagger: 0.5,
        //   duration: 0.4,
        //   scrollTrigger: {
        //     trigger: '.wrapper',
        //     start: 'top 15%',
        //     end: '4000px',
        //     scrub: 2,
        //     pin: true,
        //   },
        // })
        .to(card, {
          y: () => `-${(index + 1) * 100}vh`,
          stagger: 0.5,
          duration: 0.2,
          scrollTrigger: {
            trigger: '.wrapper',
            start: 'top 15%',
            // end: '4000px',
            scrub: 1,
            pin: true,
          },
        });
      // timeline.to(card, {
      //   scrollTrigger: {
      //     trigger: card,
      //     start: () => 'top bottom-=100',
      //     // end: () => 'top top+=40%',
      //     scrub: true,
      //     // markers: true,
      //     invalidateOnRefresh: true,
      //   },
      //   // y: '-500px',
      //   ease: 'none',
      //   scale: () => 1 - (cardsWrapper.length - index) * 0.025,
      // });
      // ScrollTrigger.create({
      //   trigger: card,
      //   start: 'top top',
      //   pin: true,
      //   pinSpacing: false,
      //   markers: true,
      //   id: 'pin',
      //   end: 'max',
      //   invalidateOnRefresh: true,
      // });
      // gsap.to(card, {
      //   scrollTrigger: {
      //     trigger: card,
      //     start: () => 'top bottom-=100',
      //     end: () => 'top top+=40',
      //     scrub: true,
      //     // markers: true,
      //     invalidateOnRefresh: true,
      //   },
      //   ease: 'none',
      //   top: '-200px',
      //   scale: () => 1 - (cardsWrapper.length - index) * 0.025,
      // });
      // ScrollTrigger.create({
      //   trigger: '#test',
      //   start: 'top top',
      //   pin: true,
      //   pinSpacing: false,
      //   markers: true,
      //   id: 'pin',
      //   end: 'max',
      //   invalidateOnRefresh: true,
      // });
    });

    // timeline.to(titleWrapper, {
    //   marginTop: '11vh',

    //   scrollTrigger: {
    //     trigger: '#workingProcesses',
    //     start: 'top top',
    //     end: 'bottom top',
    //     scrub: 1,
    //     markers: true,
    //   },
    // });

    // cardsWrapper.forEach((card) => {
    //   timeline.to(card.querySelector('div > p'), {
    //     display: 'block',
    //     onStart: () => {
    //       card.classList.add('open');
    //     },
    //   });

    //   timeline.to(card.querySelector('div > p'), {
    //     display: 'none',
    //     onComplete: () => {
    //       card.classList.remove('open');
    //     },
    //   });
    // });
  }, []);

  return (
    <Wrapper id="test">
      <p style={{ fontSize: '10px' }}> *work in process*</p>
      <StaticWrapper id="static-wrapper">
        {workProcesses.map((i, index) => (
          <Process
            key={`${i.id}`}
            className="card"
            style={{ top: `${(index + 1) * 100}vh` }}
          >
            <ProcessItem
              title={i.title}
              text={i.text}
              className={`card-item-${index + 1}`}
            />
          </Process>
        ))}
      </StaticWrapper>
    </Wrapper>
  );
};

export default WorkProcesses;
