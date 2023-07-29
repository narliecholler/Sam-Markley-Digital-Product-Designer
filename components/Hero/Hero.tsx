import React, { useEffect, useRef } from 'react';
import Button from '@/components/Button';
import arrowDown from 'react-useanimations/lib/arrowDown';
import { AnimatedIcon } from '@/components/Icon';
import { theme } from '@/theme/theme';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import { gsap } from 'gsap';

import {
  HeroWrapper,
  HeroFooter,
  DesignerDetails,
  ScrollWrapper,
} from './Hero.styles';

const Hero = () => {
  const textHeadline = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && document && textHeadline.current) {
      // required to work within react nextjs.
      // eslint-disable-next-line global-require, import/no-unresolved
      const Splitting = require('Splitting');
      Splitting({
        by: 'chars',
      });
    }

    const splittingWhitespace = document.querySelectorAll('.char, .whitespace');

    gsap
      .timeline({})
      .addLabel('start')
      .add(() => {
        document.querySelector('.headline')?.classList.add('current');
      })
      .set(
        splittingWhitespace,
        {
          y: '100%',
        },
        'switchtime',
      )
      .to(splittingWhitespace, {
        ease: 'Power3.easeOut',
        y: '0%',
        opacity: 1,
        stagger: 0.014,
        duration: 0.5,
      });
  }, []);

  return (
    <HeroWrapper>
      <h1 ref={textHeadline} className="headline">
        <p data-splitting>Defining the future &nbsp;</p>
        <p data-splitting>through research and &nbsp;</p>
        <p data-splitting>elegant digital &nbsp;</p>
        <p data-splitting>product design.</p>
      </h1>
      <HeroFooter>
        <DesignerDetails>
          <p>
            {
              "Sam is a Senior Product Designer based in London. He's had the privilege of helping to deliver exciting experiences and beautiful user interfaces globally."
            }
          </p>

          <div>
            <Button stroke="dark" />
            <span></span>
          </div>
        </DesignerDetails>
        <ScrollWrapper>
          <p>Scroll down to learn more</p>
          <AnimatedIcon
            type={arrowDown}
            stroke={theme.colors.white as unknown as string}
          />
        </ScrollWrapper>
      </HeroFooter>
    </HeroWrapper>
  );
};

export default Hero;
