import { useRef, MouseEvent } from 'react';
import { gsap } from 'gsap';
import { Html } from '@react-three/drei';

import {
  HotSpotWrapper,
  HotSpotInner,
  HotSpotCircle,
  HotSpotTextWrapper,
} from './style';
import { HotSpotProps } from './types';

const HotSpot = ({ title, text, position }: HotSpotProps) => {
  const hotSpotRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = (evt: MouseEvent<HTMLElement>) => {
    hotSpotRef.current?.classList.add('is-active');

    const { currentTarget } = evt;
    // ref.current?.classList.add("is-active");
    // Get X-coordinate for the left button edge
    const buttonPosX = currentTarget.getBoundingClientRect().left;
    const buttonPosY = currentTarget.getBoundingClientRect().top;

    // Get position of the mouse inside element from left edge
    // (current mouse X position - button x coordinate)
    const pageX = evt.clientX;
    const pageY = evt.clientY;

    const xPosOfMouse = pageX - buttonPosX;
    const yPosOfMouse = pageY - buttonPosY;

    // Get position of mouse relative to button center
    // Mouse position inside element - button width / 2
    // To get positive or negative movement
    const xPosOfMouseInsideButton = xPosOfMouse - currentTarget.offsetWidth / 2;
    const yPosOfMouseInsideButton =
      yPosOfMouse - currentTarget.offsetHeight / 2;

    // Button text divider to increase or decrease text path
    const animationDivider = 9;
    const animationDividerText = 1.5;

    const timeline = gsap.timeline();

    // Animate button text positive or negative from center
    timeline.to([hotSpotRef.current?.querySelector('span')], {
      // duration: 1,
      x: xPosOfMouseInsideButton / animationDivider,
      y: yPosOfMouseInsideButton / animationDivider,
      ease: 'power3.out',
    });

    // gsap.to([lineRef.current], {
    //   alpha: 1,
    //   duration: 0.4,
    //   onComplete: () => {},
    // });

    // if (this.innerText.length > 0) {
    timeline.to([hotSpotRef.current?.querySelector('.box')], {
      // duartion: 1,
      x: xPosOfMouseInsideButton / animationDividerText / 10,
      y: yPosOfMouseInsideButton / animationDividerText / 10,
      ease: 'power3.out',
    });
  };

  const onMouseLeave = () => {
    hotSpotRef.current?.classList.remove('is-active');

    const timeline = gsap.timeline();

    // Animate button text reset to initial position (center)
    timeline.to([hotSpotRef.current?.querySelector('span')], {
      x: -0.18,
      y: 0,
      ease: 'power3.out',
    });

    timeline.to([hotSpotRef.current?.querySelector('.box')], {
      // duration: 1,
      x: 0,
      y: 0,
      ease: 'power3.out',
    });
  };

  return (
    <Html position={position}>
      <HotSpotWrapper ref={hotSpotRef}>
        <HotSpotInner>
          <HotSpotCircle>
            <i
              onMouseMove={(e) => onMouseEnter(e)}
              onMouseLeave={() => onMouseLeave()}
            ></i>
            <span className="line"></span>
          </HotSpotCircle>

          <HotSpotTextWrapper className="box">
            <article>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          </HotSpotTextWrapper>
        </HotSpotInner>
      </HotSpotWrapper>
    </Html>
  );
};

HotSpot.displayName = 'HotSpot';

export default HotSpot;
