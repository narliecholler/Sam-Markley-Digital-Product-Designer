import { styled } from 'styled-components';
import { theme } from '@/lib/theme/theme';

export const PortfolioWrapper = styled.div`
  //   min-height: '100vh';
`;

export const Hero = styled.div`
  min-height: calc(100dvh - 80px); // minus the header for mobile.
  display: 'flex';
  justify-content: 'space-evenly';
  gap: '10rem';
  align-items: 'center';
  flex-direction: 'column';

  h1: {
    text-align: 'center';
    font-size: 'clamp(2.5re, 5vw, 4.75rem)';
    line-height: 'normal';
    margin-bottom: '1.5rem';
    background-image: 'linear-gradient(90deg, #822DA4 0%, #A2255D 100%)';
    '-webkit-background-clip': 'text';
    '-webkit-text-fill-color': 'transparent';
    '-moz-background-clip': 'text';
    '-moz-text-fill-color': 'transparent';
  };
  border-bottom: '1px solid red';

  p: {
    color: theme.colors.white;
  };

  /* '@bp1': {
    min-height: '100vh';
  }; */
`;

export const Subtitle = styled.p`
  font-size: 'clamp(1rem, 5vw, 1.5rem)';
  max-width: '480px';
  margin: 'auto';
  text-align: 'center';
`;

export const ScrollText = styled.p`
  font-weight: 700;
  max-width: '300px';
  text-align: 'center';
  display: 'flex';
  align-items: 'center';
  flex-direction: 'column';
  gap: '2rem';

  '&:after': {
    content: '';
    display: 'block';
    width: '1px';
    height: '74px';
    background-color: theme.colors.white;
  }
`;
