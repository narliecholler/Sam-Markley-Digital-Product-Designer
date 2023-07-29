import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ProcessItem from '@/components/WorkProcesses/process';
import ProgressBar from '@/components/ProgressBar';
import { workProcesses } from 'lib/constants';
import { WorkingProcessWrapper, Process } from './style';

const WorkProcesses = () => {
  // const [openProcess, setOpenProcess] = useState<number | undefined>(undefined);
  // const [progress, setProgress] = useState<number>(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#workingProcesses',
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

    cardsWrapper.forEach((card) => {
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
