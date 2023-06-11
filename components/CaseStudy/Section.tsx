import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { CaseStudySection, ProjectsHeading, AnimatedLine } from './style';
import CaseStudy from './CaseStudy';
import caseStudies from './caseStudies';

const CSSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState({ index: 0, hover: false });

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // controls the border transitions sliding in from left to right.
    if (projectsRef.current) {
      const borderElements = Array.from(
        document.querySelectorAll('.animatedBorder'),
      );

      // eslint-disable-next-line array-callback-return
      borderElements.map((i) => {
        gsap.set(i, { xPercent: -150 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: i,
              start: 'bottom bottom-=100px',
            },
          })
          .to(i, {
            duration: 2,
            xPercent: 0,
            ease: 'power3.out',
            transformOrigin: 'left',
          });
      });
    }

    // controls the background transition on scroll.
    //   const onScroll = () => {
    //     if (typeof window !== 'undefined' && projectsRef.current) {
    //       const scroll = window.scrollY + window.innerHeight / 3;

    //       // add class if section appears within bottom of scrolling depending
    // on scroll value above.
    //       if (
    //         (projectsRef.current.getBoundingClientRect().top <= scroll &&
    //           projectsRef.current.getBoundingClientRect().top +
    //             projectsRef.current.getBoundingClientRect().height >
    //             scroll) ||
    //         (projectsRef.current.getBoundingClientRect().bottom <= scroll &&
    //           projectsRef.current.getBoundingClientRect().bottom +
    //             projectsRef.current.getBoundingClientRect().height <
    //             scroll)
    //       ) {
    //         projectsRef.current.classList.add('color-black');
    //       }

    //       // remove class if scroll pass the section.
    //       if (projectsRef.current.getBoundingClientRect().bottom < 0) {
    //         projectsRef.current.classList.remove('color-black');
    //       }
    //     }
    //   };

    //   window.addEventListener('scroll', onScroll);

    //   return () => {
    //     window.removeEventListener('scroll', onScroll);
    //   };
  }, []);

  return (
    <CaseStudySection ref={projectsRef}>
      <div style={{ maxWidth: '920px', margin: 'auto' }}>
        <ProjectsHeading>Selected Projects</ProjectsHeading>
        <ul>
          {caseStudies.map((i, index) => {
            const { id, company, collection, text } = i;

            return (
              <li
                key={`caseStudy_${i.id}`}
                onMouseEnter={() => setHovered({ index, hover: true })}
                onMouseLeave={() => setHovered({ index, hover: false })}
              >
                <Link
                  href={{
                    pathname: '/portfolio/[company]',
                    query: { company: id },
                  }}
                  key={`caseStudy_${id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <CaseStudy
                    id={id}
                    title={company}
                    images={collection}
                    text={text}
                  />
                </Link>
                <AnimatedLine
                  className="animatedBorder"
                  hovered={hovered.index === index ? hovered.hover : false}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </CaseStudySection>
  );
};

export default CSSection;
