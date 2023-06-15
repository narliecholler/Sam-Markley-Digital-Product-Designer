/* eslint-disable arrow-body-style */
import React from 'react';
import Button from '@/components/Button';
import { Icon } from '@/components/Icon';
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

          {/* <Button /> */}

          <MobileContact>
            {/* <Button /> */}
            <span></span>
          </MobileContact>
        </DesignerDetails>

        <ScrollWrapper>
          <p>Scroll down to learn more</p>
          <Icon type="arrowDown" />
        </ScrollWrapper>
      </HeroFooter>
    </HeroWrapper>
  );
};

export default Hero;
