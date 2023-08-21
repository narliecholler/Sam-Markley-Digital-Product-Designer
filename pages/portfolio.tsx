import { useEffect, useRef } from 'react';
import { SectionContainer } from '@/components/Template';
import { PortfolioItem } from '@/components/portfolio-item';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Flip } from 'gsap/dist/Flip';
import Lenis from '@studio-freight/lenis';
import {
  PortfolioWrapper,
  Hero,
  Subtitle,
  ScrollText,
} from 'styles/portfolio.styles';

const imgs = ['/assets/portfolio/inhaus/portfolio-item.png'];

const data = [
  {
    brand: 'inhaus' as const,
    img: '/assets/portfolio/inhaus/portfolio-item.png',
  },
];

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
        titleWrap: itemRef.current.querySelector('.title-wrap'),
        titleUp: itemRef.current.querySelector('.title-up'),
        titleDown: itemRef.current.querySelector('.title-down'),
        content: Array.from(itemRef.current.querySelectorAll('.content')),
        svg: itemRef.current.querySelector('svg'),
        mask: itemRef.current.querySelector('.mask'),
        circle: itemRef.current.querySelector('circle'),
        image: itemRef.current.querySelector('image'),
      };

      // console.log('elements', elements.image);

      const flipState = Flip.getState([elements.titleUp, elements.titleDown]);
      elements.content[1].prepend(elements.titleUp, elements.titleDown);

      const isCircle = elements.circle.tagName.toLowerCase() === 'circle';

      console.log('isCircle', elements.circle);

      // create FLIP
      const flip = Flip.from(flipState, {
        ease: 'none',
        simple: true,
      })
        .fromTo(
          elements.circle,
          {
            attr: elements.circle
              ? { r: elements.circle.getAttribute('r') }
              : { d: elements.circle.getAttribute('d') },
          },
          {
            ease: 'none',
            attr: elements.circle
              ? { r: elements.circle.dataset.valueFinal }
              : { d: elements.circle.dataset.valueFinal },
          },
          0,
        )
        .fromTo(
          elements.image,
          {
            transformOrigin: '50% 50%',
            filter: 'brightness(150%)',
          },
          {
            ease: 'none',
            scale: isCircle ? 1.2 : 1,
            filter: 'brightness(150%)',
          },
          0,
        );

      ScrollTrigger.create({
        trigger: elements.titleWrap,
        start: 'clamp(top bottom-=10%)',
        end: '+=40%',
        scrub: true,
        animation: flip,
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
          {data.map((i) => (
            <PortfolioItem key={i.brand} img={i.img} brand={i.brand} />
          ))}
        </div>
      </SectionContainer>
      <p></p>
    </>
  );
};

export default Portfolio;
