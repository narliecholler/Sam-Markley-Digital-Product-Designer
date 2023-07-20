/* eslint-disable arrow-body-style */
import React from 'react';
import Button from '@/components/Button';
import arrowDown from 'react-useanimations/lib/arrowDown';
import { AnimatedIcon } from '@/components/Icon';
import { theme } from '@/theme/theme';
import {
  HeroWrapper,
  HeroFooter,
  DesignerDetails,
  ScrollWrapper,
  MobileContact,
} from './Hero.styles';

interface HeroProps {
  titleBold: string;
  title: string;
  description: string;
}

const Hero = ({ titleBold, title, description }: HeroProps) => {
  // const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   // set the height of hero of browser window additional to a default vh.
  //   if (typeof window !== 'undefined') {
  //     setHeight(window.innerHeight - 80);
  //   }
  // }, []);

  return (
    <HeroWrapper>
      <h1>
        <span>{titleBold}</span>
        <br />
        {title}
      </h1>
      <HeroFooter>
        <DesignerDetails>
          <p>{description}</p>

          <Button stroke="dark" />

          <MobileContact>
            {/* <Button /> */}
            <span></span>
          </MobileContact>
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
