import { useEffect, useRef } from 'react';
import { SectionContainer } from '@/components/template';
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

gsap.registerPlugin(ScrollTrigger, Flip);

const Portfolio = () => {
  const itemRef = useRef<HTMLDivElement[] | null>([]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (itemRef.current && itemRef.current.length > 0) {
      itemRef.current
        .filter((element) => element !== null)
        .forEach((item, index) => {
          const elements = {
            el: itemRef.current,
            titleWrap: Array.from(item.querySelectorAll('.title-wrap')),
            titleUp: Array.from(item.querySelectorAll('.title-up')),
            titleDown: Array.from(item.querySelectorAll('.title-down')),
            content: Array.from(item.querySelectorAll('.content')),
            svg: Array.from(item.querySelectorAll('svg')),
            circle: Array.from(item.querySelectorAll('circle')),
            image: Array.from(item.querySelectorAll('image')),
          };

          const flipState = Flip.getState([
            elements.titleUp[0],
            elements.titleDown[0],
          ]);

          console.log('elements.titleUp[0]', elements.titleUp[0]);

          // we need to add the prepend to every even item (the second content-wrapper per item).
          elements.content
            .filter((i, ind) => ind % 2)
            .map(
              (content) =>
                content.prepend(elements.titleUp[0], elements.titleDown[0]),
              // eslint-disable-next-line function-paren-newline
            );

          const isCircle =
            elements.circle[0]?.tagName.toLowerCase() === 'circle';

          // create FLIP
          const flip = Flip.from(flipState, {
            ease: 'none',
            simple: true,
          })
            .fromTo(
              elements.circle,
              {
                attr: isCircle
                  ? { r: elements.circle[0]?.getAttribute('r') }
                  : { d: elements.circle[0]?.getAttribute('d') },
              },
              {
                ease: 'none',
                attr: isCircle
                  ? { r: elements.circle[0]?.dataset.valueFinal }
                  : { d: elements.circle[0]?.dataset.valueFinal },
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
            trigger: elements.titleWrap[0],
            start: 'clamp(top bottom-=10%)',
            end: '+=30%',
            scrub: true,
            animation: flip,
          });
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
        <div>
          {portfolioInformation.map((i, index) => {
            const getRef = (element) => itemRef.current.push(element);

            return (
              <PortfolioItem
                ref={getRef}
                key={i.title}
                index={index}
                img={i.image}
                title={i.title}
                subtitle={i.subtitle}
                information={i.information}
              />
            );
          })}
        </div>
      </SectionContainer>
      <p></p>
    </>
  );
};

export default Portfolio;
