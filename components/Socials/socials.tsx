import Link from 'next/link';

import UseAnimations from 'react-useanimations';
import instagram from 'react-useanimations/lib/instagram';
import dribbble from 'react-useanimations/lib/dribbble';
import linkedin from 'react-useanimations/lib/linkedin';

import { theme } from '@/theme/theme';

import SocialIconsWrapper from './socials.styles';

const Socials = () => (
  <SocialIconsWrapper>
    <Link
      href="https://www.linkedin.com/in/sammarkley"
      target="_blank"
      aria-label="Navigate to my LinkedIn"
    >
      <UseAnimations
        animation={linkedin}
        size={32}
        strokeColor={theme.colors.black}
      />
    </Link>
    <Link
      href="https://dribbble.com/sammarkley"
      target="_blank"
      aria-label="Navigate to my dribble page"
    >
      <UseAnimations
        animation={dribbble}
        size={32}
        strokeColor={theme.colors.black}
      />
    </Link>
    <Link
      href="https://www.instagram.com/sammarkley"
      target="_blank"
      aria-label="Navigate to my instagram"
    >
      <UseAnimations
        animation={instagram}
        size={32}
        strokeColor={theme.colors.black}
      />
    </Link>
  </SocialIconsWrapper>
);

export default Socials;
