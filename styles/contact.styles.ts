import { styled } from 'styled-components';
import { theme } from '@/theme/theme';

export const Contact = styled.div`
  '& .inner-section': {
    padding: 0;

    /* '@bp1': {
      padding: '3rem 5rem';
    } */
  }
`;

export const ContactWrapper = styled.div`
  background-color: ${theme.colors.primary};
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  min-height: '100vh';
  height: '100%';

  width: '100vw';
  marginleft: 'calc((-100vw + 100%) / 2)';
  margin-right: 'calc((-100vw + 100%) / 2)';

  /* '@bp1': {
    padding-top: '4rem';
    width: 'unset';
    margin: 'unset';
    padding-bottom: '3rem';
  } */
`;

export const ContactContainer = styled.div`
  width: '100%';
  max-width: '1172px';
  padding: '35px 26px';
  background-color: '#fff';
  display: 'flex';
  gap: '2rem';
  flex-direction: 'column';

  /* '@bp1': {
    flex-direction: 'row';
    gap: '4rem';
    width: '85%';
    padding: '60px 60px';
    min-height: '500px';
    border-radius: '16px';
  } */

  /* '@bp2': {
    width: '70%';
    padding: '80px';
  } */
`;

export const ContactInformation = styled.div`
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'space-between';
  gap: '1.5rem';

  h1: {
    line-height:
      'clamp(2.5625rem, 1.7589285714285712rem + 3.214285714285715vw, 5.25rem)';
    font-size: 'clamp(2.125, 1.1666666666666665rem + 3.333333333333334vw, 5rem)';
  };

  /* '@bp1': {
    width: '50%';
    position: 'relative';
  }; */

  '& span': {
    background-image: 'linear-gradient(90deg, #822DA4 0%, #A2255D 44.88%)';
    '-webkit-background-clip': 'text';
    '-webkit-text-fill-color': 'transparent';
    '-moz-background-clip': 'text';
    '-moz-text-fill-color': 'transparent';
    font: 'inherit';
  };
  `;

export const ContactForm = styled.div`
  /* '@bp1': {
    width: '50%';
  }; */
`;

export const MobileMenuSocials = styled.div`
  display: 'flex';
  align-items: 'flex-start';
  flex-direction: 'column';
  gap: '2rem';

  '& > div:first-child': {
    padding-top: '2rem';
    /* '@bp1': {
      padding-top: 0;
    }; */
  }

  '& > div:last-child': {
    display: 'none';

    /* '@bp1': {
      display: 'flex';
    }; */
  }
`;

export const DateInformation = styled.div`
  display: 'none';
  position: 'relative';
  border: '1px solid #F9F9F9';
  border-radius: '0px 8px 8px 0px';

  '& div:first-child': {
    position: 'relative';
    z-index: 10;
  }

  // breakout container for background.
  '& div:last-child': {
    border: '1px solid #F9F9F9';
    border-radius: '0px 8px 8px 0px';
    background-color: '#F9F9F9';
    position: 'absolute';

    height: '100%';
    z-index: 0;
    top: 0;

    /* '@bp1': {
      width: 'calc(100% + 60px)';
      left: '-60px';
    };

    '@bp2': {
      width: 'calc(100% + 120px)';
      left: '-80px';
    }; */
  }

  /* '@bp1': {
    display: 'block';
    background-color: '#F9F9F9';
    padding: '24px 0';

    '& p': {
      position: 'relative';
    };

    '& p:first-child': {
      font-weight: 500;
      font-size: '34px';
      padding-bottom: '16px';
    };
  }; */
`;
