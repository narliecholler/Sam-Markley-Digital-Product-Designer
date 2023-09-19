import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { workProcesses } from 'lib/constants';
import ProcessItem from './process-card';
import ProgressBar from '../ProgressBar/progressBar';
import { Test, Header, Wrapper, Process } from './work-process.style';

gsap.registerPlugin(ScrollTrigger);

const WorkProcesses = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [completed, setCompleted] = useState<HTMLDivElement[]>([]);

  // lets grab the completed scrolled items to increase the progress.
  // useEffect(() => {
  //   if (typeof window !== 'undefined' && headerRef.current) {
  //     setCompleted(Array.from(document.querySelectorAll('.active')));
  //   }
  // }, []);

  // console.log('completed', completed);

  // console.log('completed', completed);

  useLayoutEffect(() => {
    const title = headerRef?.current;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.card') as Element[];

      const timeline = gsap.timeline();
      // const mm = gsap.matchMedia()

      gsap.set(cards, {
        opacity: 0,
      });

      cards.forEach((card, index) => {
        timeline.to(card, {
          scrollTrigger: {
            trigger: card,
            start: () => 'top bottom+=2000',
            scrub: true,
            invalidateOnRefresh: true,
          },
          ease: 'power2.inOut',
          opacity: 1,
        });

        ScrollTrigger.create({
          trigger: card,
          endTrigger: '.footer',
          start: `center center+=${index * 65}`,
          end: 'top bottom',
          pin: true,
          pinSpacing: false,
          id: `card_${(index + 1).toString()}`,
          invalidateOnRefresh: true,
          toggleClass: 'active',
        });
      });

      ScrollTrigger.create({
        trigger: title,
        start: () => 'top top+=90',
        end: 'bottom bottom+=250',
        pin: true,
        pinSpacing: false,
        id: 'title',
        endTrigger: '.footer',
        onUpdate: () =>
          setCompleted(Array.from(document.querySelectorAll('.active'))),
      });

      // ScrollTrigger.matchMedia()

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <Test>
      <Header ref={headerRef}>
        <ProgressBar
          percentage={(100 / 6) * completed.length}
          numberActive={completed.length}
        />
        <h2 className="heading">Working Processes</h2>
      </Header>
      <Wrapper className="test">
        {workProcesses.map((i, index) => (
          <Process key={`${i.id}`} className="card">
            <ProcessItem
              title={i.title}
              text={i.text}
              className={`card-item-${index + 1}`}
            />
          </Process>
        ))}
      </Wrapper>
    </Test>
  );
};

export default WorkProcesses;
