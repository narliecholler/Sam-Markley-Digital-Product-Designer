import { CircularProgressbar } from 'react-circular-progressbar';
import { styled } from 'theme';
import 'react-circular-progressbar/dist/styles.css';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '500vh',

  '& h2': {
    '@bp1': {
      marginTop: '2rem',
      marginBottom: '2rem',
    },
  },
});

export const StaticWrapper = styled('div', {
  position: 'sticky',
  height: '400px',
  top: '30%',
  backgroundColor: 'red',
});

export const ProcessContainer = styled('div', {
  backgroundColor: '#fff',
  padding: '15px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '0.5rem auto',
  position: 'relative',
  textAlign: 'center',

  '& h3': {
    fontSize: 'clamp(1.5rem, 5vw, 2.125rem)',
  },

  '& p': {
    fontSize: '0.875rem',
    lineHeight: '26px',
    maxWidth: '350px',

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
  opacity: 1,

  '& .card-item-1': {
    borderRadius: '24px 24px 0px 0px',
  },

  '& .card-item-6': {
    borderRadius: '0px 0px 24px 24px',
  },

  '@bp1': {
    width: '600px',
  },
});
