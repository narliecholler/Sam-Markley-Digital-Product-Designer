import { styled } from 'styled-components';
import { theme } from '@/lib/theme/theme';

export const HeroSection = styled.div`
  display: 'flex';
  flex-direction: 'column';
  background-color: ${theme.colors.primary};
  min-height: '100vh';

  // '@bp1': {
  //   padding-top: '1rem';
  // };

  /* '@bp2': {
    height: 'calc(100vh - 80px)';
  }; */
`;

export const HeroHeader = styled.div`
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  color: '#fff';
  flex-direction: 'column-reverse';
  padding-top: '2rem';

  /* '@bp1': {
    flex-direction: 'unset';
    width: '100%';
    height: '80%';
  }; */
`;

export const HeroFooter = styled.div`
  width: '100%';
  height: '120px';
  background: 'linear-gradient(93.36deg, #95E7A4 -11.48%, #8FD8FA 34.24%, #CBBEFA 74.58%, #FEFEFE 110.21%)';
  border-radius: '16px';
`;

export const LogosWrapper = styled.div`
  flex-wrap: 'wrap';
  align-items: 'center';
  justify-content: 'space-around';
  height: '100%';
  width: '100%';
  display: 'flex';
`;

export const SplineWrapper = styled.div`
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  width: '50%';
  flex: 1;
`;

export const TitleWrapper = styled.div`
  flex: 1;
  display: 'flex';
  flex-direction: 'column';
  gap: '2rem';

  h1: {
    line-height:
      'clamp(2.5625rem, 1.7589285714285712rem + 3.214285714285715vw, 4.25rem)';
    font-size: 'clamp(2rem, 1.1666666666666665rem + 3.333333333333334vw, 5rem)';

    '& span': {
      font: 'inherit';
      background-image: 'linear-gradient(90deg, #822DA4 0%, #A2255D 100%)';
      '-webkit-background-clip': 'text';
      '-webkit-text-fill-color': 'transparent';
      '-moz-background-clip': 'text';
      '-moz-text-fill-color': 'transparent';
    };
  };

  /* p: {
    '@bp1': {
      max-width: '65%';
    };
  }; */
`;

export const PillarWrapper = styled.div`
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'center';
  width: '100%';
  max-width: '950px';
  margin: 'auto';
  gap: '1rem';

  h2: {
    font-size: 'clamp(1.8rem; 1.1666666666666665rem + 3.333333333333334vw; 3rem)';
    line-height: 'normal';
    text-align: 'center';
    margin-bottom: '0.5rem';
  }

  p: {
    text-align: 'center';
  }
`;

export const PillarGrid = styled.div`
  display: 'flex';
  width: '100%';
  flex-wrap: 'wrap';
  justify-content: 'center';
  align-items: 'center';
  margin: 'auto';
  gap: '1.5rem';
  margin-top: '2rem';

  p: {
    text-align: 'left';
  }
`;

export const QuoteWrapper = styled.div`
  display: 'grid';
  grid-template-columns: 'repeat(12; 1fr)';
  gridrowgap: '1rem';
  flex-wrap: 'wrap';
  background-color: ${theme.colors.primary};

  /* '@bp1': {
    grid-column-gap: '2rem';
  }; */
`;
