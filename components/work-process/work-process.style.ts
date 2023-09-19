import { CircularProgressbar } from 'react-circular-progressbar';
import { styled, theme } from 'theme';
import 'react-circular-progressbar/dist/styles.css';

export const Test = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  h2: {
    marginTop: '0px',
    backgroundImage:
      'linear-gradient(137deg, #95E7A4 0%, #8FD8FA 35.42%, #CBBEFA 66.67%, #FEFEFE 94.27%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent',
    width: '100%',
    textAlign: 'center',

    '@bp1': {
      marginBottom: '2rem',
    },
  },
});

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '550vh',
  position: 'relative',
});

export const StaticWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  position: 'sticky',
  top: '40%',
});

export const ProcessContainer = styled('div', {
  backgroundColor: theme.colors.secondary,
  color: theme.colors.white,
  padding: '15px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
  textAlign: 'center',
  borderRadius: '24px',

  '& h3': {
    fontSize: 'clamp(1.5rem, 5vw, 2.125rem)',
    paddingBottom: '1rem',
  },

  '& p': {
    fontSize: '0.875rem',
    lineHeight: '26px',
    maxWidth: '400px',

    '@bp1': {
      fontSize: '1rem',
    },
  },
});

export const ProgressBar = styled(CircularProgressbar, {
  width: '20%',
});

export const TextWrapper = styled('p', {
  fontSize: '1rem',
  lineHeight: '26px',
  maxWidth: '350px',
});

export const Process = styled('div', {
  position: 'relative',
  height: 'auto',
  fontSize: '36px',
  marginBottom: '20rem',

  '@bp1': {
    width: '600px',
  },
});
