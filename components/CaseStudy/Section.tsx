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
        gsap.set(i, { width: 0 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: i,
              start: 'bottom bottom-=100px',
            },
          })
          .to(i, {
            duration: 2,
            width: '100%',
            ease: 'power3.out',
            transformOrigin: 'left',
          });
      });
    }
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
