import { useEffect, useRef } from 'react';
import { SectionContainer } from '@/components/Template';
import { PortfolioItem } from '@/components/portfolio-item';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Flip } from 'gsap/dist/Flip';
import Lenis from '@studio-freight/lenis';
import { portfolioInformation } from '@/lib/constants';
import {
  PortfolioWrapper,
  Hero,
  Subtitle,
  ScrollText,
} from 'styles/portfolio.styles';

const Portfolio = () => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip);

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenis.on('scroll', () => ScrollTrigger.update());

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    if (itemRef.current) {
      const elements = {
        el: itemRef.current,
        titleWrap: Array.from(itemRef.current.querySelectorAll('.title-wrap')),
        titleUp: Array.from(itemRef.current.querySelectorAll('.title-up')),
        titleDown: Array.from(itemRef.current.querySelectorAll('.title-down')),
        content: Array.from(itemRef.current.querySelectorAll('.content')),
        svg: Array.from(itemRef.current.querySelectorAll('svg')),
        circle: Array.from(itemRef.current.querySelectorAll('circle')),
        image: Array.from(itemRef.current.querySelectorAll('image')),
      };

      Array.from(elements.titleWrap).forEach((item, index) => {
        const flipState = Flip.getState([
          elements.titleUp[index],
          elements.titleDown[index],
        ]);

        // we need to add the prepend to every even item (the second content-wrapper per item).
        elements.content
          .filter((i, ind) => ind % 2)
          .map(
            (content, contentIndex) =>
              content.prepend(
                elements.titleUp[contentIndex],
                elements.titleDown[contentIndex],
              ),
            // eslint-disable-next-line function-paren-newline
          );

        // const isCircle =
        //   elements.circle[index]?.tagName.toLowerCase() === 'circle';

        // create FLIP
        const flip = Flip.from(flipState, {
          ease: 'none',
          simple: true,
        })
          .fromTo(
            elements.circle,
            {
              attr: elements.circle
                ? { r: elements.circle[index]?.getAttribute('r') }
                : { d: elements.circle[index]?.getAttribute('d') },
            },
            {
              ease: 'none',
              attr: elements.circle
                ? { r: elements.circle[index]?.dataset.valueFinal }
                : { d: elements.circle[index]?.dataset.valueFinal },
            },
            0,
          )
          .fromTo(
            elements.image,
            {
              transformOrigin: '50% 50%',
              filter: 'brightness(100%)',
            },
            {
              ease: 'none',
              scale: 1,
              filter: 'brightness(100%)',
            },
            0,
          );

        ScrollTrigger.create({
          trigger: elements.titleWrap[index],
          start: 'clamp(top bottom-=10%)',
          end: '+=30%',
          scrub: true,
          animation: flip,
          markers: true,
        });

        // return null;
      });
    }
  }, []);
  return (
    <>
      <SectionContainer backgroundColor="dark">
        <PortfolioWrapper>
          <Hero>
            <div>
              <h1>Portfolio Showcase</h1>
              <Subtitle>
                I&apos;ve worked within both B2B and B2C delivering function and
                beautiful apps with various technologies.
              </Subtitle>
            </div>
            <ScrollText>
              Scroll moderately to fully experience the animations
            </ScrollText>
          </Hero>
        </PortfolioWrapper>
        <div ref={itemRef}>
          {portfolioInformation.map((i, index) => (
            <PortfolioItem
              key={i.title}
              index={index}
              img={i.image}
              title={i.title}
              subtitle={i.subtitle}
              information={i.information}
            />
          ))}
        </div>
      </SectionContainer>
      <p></p>
    </>
  );
};

export default Portfolio;
