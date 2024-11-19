import { CircularProgressbar } from 'react-circular-progressbar';
import { styled } from 'styled-components';
import { theme } from '@/theme/theme';
import 'react-circular-progressbar/dist/styles.css';

export const Test = styled.div`
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  flex-direction: 'column';
`;

export const Header = styled.div`
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
  justify-content: 'center';
  width: '100%';

  h2: {
    margin-top: '0px';
    background-image:
      'linear-gradient(137deg, #95E7A4 0%, #8FD8FA 35.42%, #CBBEFA 66.67%, #FEFEFE 94.27%)';
    '-webkit-background-clip': 'text';
    '-webkit-text-fill-color': 'transparent';
    '-moz-background-clip': 'text';
    '-moz-text-fill-color': 'transparent';
    width: '100%';
    text-align: 'center';

    /* '@bp1': {
      margin-bottom: '2rem';
    }; */
  };
`;

export const Wrapper = styled.div`
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'center';
  align-items: 'center';
  height: '550vh';
  position: 'relative';
`;

export const StaticWrapper = styled.div`
  display: 'flex';
  justify-content: 'center';
  flex-direction: 'column';
  align-items: 'center';
  width: '100%';
  position: 'sticky';
  top: '40%';
`;

export const ProcessContainer = styled.div`
  background-color: theme.colors.secondary;
  color: theme.colors.white;
  padding: '15px 20px';
  display: 'flex';
  align-items: 'center';
  justify-content: 'center';
  flex-direction: 'column';
  position: 'relative';
  text-align: 'center';
  border-radius: '24px';

  '& h3': {
    font-size: 'clamp(1.5rem, 5vw, 2.125rem)';
    padding-bottom: '1rem';
  }

  '& p': {
    font-size: '0.875rem';
    line-height: '26px';
    max-width: '400px';

    /* '@bp1': {
      font-size: '1rem';
    }; */
  }
`;

// export const ProgressBar = styled(CircularProgressbar, {
//   width: '20%'
// });

export const TextWrapper = styled.p`
  font-size: '1rem';
  line-height: '26px';
  max-width: '350px';
`;

export const Process = styled.div`
  position: 'relative';
  height: 'auto';
  font-size: '36px';
  margin-bottom: '20rem';

  /* '@bp1': {
    width: '600px';
  } */
`;
