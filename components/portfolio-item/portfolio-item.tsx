import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Flip } from 'gsap/dist/Flip';
import { Wrapper, Content, TitleWrapper, Title } from './portfolio-item.styles';

type PortfolioItemProps = {
  img: string;
  brand: 'inhaus';
};

const brandFilter = (brand: string) => {
  const data = {
    inhaus: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={1000}
          height={450}
          className="content__img content__img--2"
          viewBox="0 0 1000 450"
        >
          <defs>
            <filter id="displacementFilter2">
              <feTurbulence
                baseFrequency={0.1}
                result="noise"
                type="fractalNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                result="displacement"
                scale={100}
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feMorphology
                in="displacement"
                operator="dilate"
                radius={2}
                result="morph"
              />
            </filter>
            <mask id="b">
              <circle
                cx="50%"
                cy="50%"
                r="0"
                data-value-final="950"
                fill="white"
                className="mask"
                style={{ filter: 'url(#displacementFilter2)' }}
              />
            </mask>
          </defs>
          <image
            xlinkHref="/assets/portfolio/images/inhaus/portfolio-item.png"
            width={1000}
            height={450}
            mask="url(#b)"
          />
        </svg>
      </>
    ),
  };

  return data[brand];
};

export const PortfolioItem = ({ img, brand }: PortfolioItemProps) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  //   useEffect(() => {
  //     gsap.registerPlugin(Flip, ScrollTrigger);

  //     if (itemRef.current) {
  //       const elements = {
  //         el: itemRef.current,
  //         titleWrap: itemRef.current.querySelector('.title-wrap'),
  //         titleUp: itemRef.current.querySelector('.title-up'),
  //         titleDown: itemRef.current.querySelector('.title-down'),
  //         content: Array.from(itemRef.current.querySelectorAll('.content')),
  //         svg: itemRef.current.querySelector('svg'),
  //         mask: itemRef.current.querySelector('mask'),
  //         image: itemRef.current.querySelector('image'),
  //       };

  //       console.log('elements', elements.image);

  //       const flipState = Flip.getState([elements.titleUp, elements.titleDown]);
  //       elements.content[1].prepend(elements.titleUp, elements.titleDown);

  //       const isCircle = elements.mask.tagName.toLowerCase() === 'circle';

  //       // create FLIP
  //       const flip = Flip.from(flipState, {
  //         ease: 'none',
  //         simple: true,
  //       })
  //         .fromTo(
  //           elements.mask,
  //           {
  //             attr: isCircle
  //               ? { r: elements.mask.getAttribute('r') }
  //               : { d: elements.mask.getAttribute('d') },
  //           },
  //           {
  //             ease: 'none',
  //             attr: isCircle
  //               ? { r: elements.mask.dataset.valueFinal }
  //               : { d: elements.mask.dataset.valueFinal },
  //           },
  //           0,
  //         )
  //         .fromTo(
  //           elements.image,
  //           {
  //             transformOrigin: '50% 50%',
  //             filter: 'brightness(150%)',
  //           },
  //           {
  //             ease: 'none',
  //             scale: isCircle ? 1.2 : 1,
  //             filter: 'brightness(150%)',
  //           },
  //           0,
  //         );

  //       ScrollTrigger.create({
  //         trigger: elements.titleWrap,
  //         start: 'clamp(top bottom-=10%)',
  //         end: '+=40%',
  //         scrub: true,
  //         animation: flip,
  //       });
  //     }
  //   }, []);

  return (
    <>
      <Wrapper ref={itemRef}>
        <Content className="content">
          <TitleWrapper className="title-wrap">
            <Title className="title-up" up>
              Storm
            </Title>
            <Title className="title-down" down>
              Born
            </Title>
          </TitleWrapper>
        </Content>
        <Content className="content" layout animation="two">
          {brandFilter(brand)}
          <p className="content-text">
            The skies above were tinged with an otherworldly hue, casting an
            eerie glow on the jagged rock formations below.
          </p>
        </Content>
      </Wrapper>
    </>
  );
};
