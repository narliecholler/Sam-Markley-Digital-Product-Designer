import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Icon } from '@/components/icon';
import {
  CaseStudyWrapper,
  CaseStudyInner,
  Heading,
  CaseStudyDescription,
  LogoWrapper,
  ImgWrapper,
  MobileIcon,
  AnimatedLine,
} from './card.style';

interface CaseStudyProps {
  title: string;
  text?: string;
  id: 'microsoft' | 'inhaus' | 'gamdom' | 'stuartlochhead' | 'opal';
  index: number;
  images: string[];
  logo?: string;
}

interface ElementTypes {
  imagesWrapper: Element[] | [];
  images: Element[] | [];
  titleWrap: Element | null;
  title: Element | null;
  description: Element | null;
}

const CaseStudy = ({ title, id, images, text, index }: CaseStudyProps) => {
  const [hovered, setHovered] = useState({ index: 0, hover: false });
  const rowRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<ElementTypes[]>([
    {
      imagesWrapper: [],
      images: [],
      titleWrap: null,
      title: null,
      description: null,
    },
  ]);

  const onMouseEnter = () => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      gsap.killTweensOf([
        rows[0].imagesWrapper,
        rows[0].description,
        rows[0].images,
        rows[0].title,
      ]);

      const mouseEnterTimeline = gsap.timeline();
      mouseEnterTimeline
        .to(rows[0].description, {
          duration: 0.1,
          ease: 'power3',
          xPercent: 0,
          display: 'none',
          stagger: -0.035,
        })
        .addLabel('start', 0)
        .to(rows[0].imagesWrapper, {
          duration: 0,
          display: 'grid',
        })
        .to(
          rows[0].images,
          {
            delay: 0.2,
            duration: 0.8,
            ease: 'power3',
            startAt: {
              scale: 0.8,
              xPercent: 20,
            },
            scale: 1,
            xPercent: 0,
            opacity: 1,
            stagger: -0.035,
          },
          'start',
        )
        .to(
          rows[0].title,
          {
            duration: 0.1,
            ease: 'power1.in',
            yPercent: -100,
            onComplete: () =>
              rows[0].titleWrap?.classList.add('cell__title--switch'),
          },
          'start',
        )
        .to(
          rows[0].title,
          {
            duration: 0.5,
            ease: 'expo',
            startAt: {
              yPercent: 100,
              rotation: 15,
            },
            yPercent: 0,
            rotation: 0,
          },
          'start+=0.1',
        );
    });
  };

  const onMouseLeave = () => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      gsap.killTweensOf([
        rows[0].imagesWrapper,
        rows[0].description,
        rows[0].images,
        rows[0].title,
      ]);

      const onMouseLeaveTimeline = gsap.timeline();

      onMouseLeaveTimeline
        .addLabel('start')
        .to(rows[0].imagesWrapper, {
          duration: 0,
          display: 'none',
        })
        .to(rows[0].description, {
          delay: 0.2,
          ease: 'power4',
          display: 'flex',
        })
        .to(
          rows[0].images,
          {
            duration: 0.4,
            ease: 'power4',
            opacity: 0,
            scale: 0.8,
          },
          'start',
        )
        .to(
          rows[0].title,
          {
            duration: 0.1,
            ease: 'power1.in',
            yPercent: -100,
            onComplete: () =>
              rows[0].titleWrap?.classList.remove('cell__title--switch'),
          },
          'start',
        )
        .to(
          rows[0].title,
          {
            duration: 0.5,
            ease: 'expo',
            startAt: {
              yPercent: 100,
              rotation: 15,
            },
            yPercent: 0,
            rotation: 0,
          },
          'start+=0.1',
        );
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    setRows([
      {
        imagesWrapper: Array.from(
          document.querySelectorAll(`.row_${id} .cell--images`),
        ),
        images: Array.from(
          document.querySelectorAll(`.row_${id} .cell--images > .cell__img`),
        ),

        title: document.querySelector(
          `.row_${id} .cell--text > .cell__title > .oh__inner`,
        ),
        titleWrap: document.querySelector(
          `.row_${id} .cell--text > .cell__title`,
        ),
        description: document.querySelector(`.row_${id} .description`),
      },
    ]);

    const row = rowRef.current;

    if (row && rows[0].images.length) {
      row.addEventListener('mouseenter', onMouseEnter);
      row.addEventListener('mouseleave', onMouseLeave);

      // controls the border transitions sliding in from left to right.
      // if (projectsRef.current) {
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

    return () => {
      row?.removeEventListener('mouseenter', onMouseEnter);
      row?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [rowRef.current]);

  return (
    <CaseStudyWrapper
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
        <CaseStudyInner className={`row_${id}`} ref={rowRef}>
          <div className="cell cell--text">
            <Heading $brand={id} className="cell__title oh">
              <LogoWrapper className="oh__inner">{title}</LogoWrapper>
            </Heading>
          </div>
          <div className="description">
            <p>{text}</p>
          </div>
          <MobileIcon className="mobileIcon">
            <Icon type="arrowRight" />
          </MobileIcon>
          <CaseStudyDescription className="cell cell--images">
            {images.map((i, imageIndex) => (
              <div className="cell__img" key={`${id}_${imageIndex}`}>
                <ImgWrapper
                  className="cell__img-inner"
                  style={{ backgroundImage: `url(${i})` }}
                />
              </div>
            ))}
          </CaseStudyDescription>
        </CaseStudyInner>
      </Link>
      <AnimatedLine
        className="animatedBorder"
        $userHoserved={hovered.index === index ? hovered.hover : false}
      />
    </CaseStudyWrapper>
  );
};

export default CaseStudy;
