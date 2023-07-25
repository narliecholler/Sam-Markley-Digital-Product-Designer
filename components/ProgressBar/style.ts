import { styled, theme } from '@/theme/theme';

export const ProgressBarWrapper = styled('div', {
  width: '80px',
  height: '80px',
  display: 'flex',
  flexWrap: 'wrap',
});

export const Circle = styled('div', {
  margin: '0 15px 15px 0',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundImage:
    'radial-gradient(transparent 0%, transparent 60%, lightgray 60%, lightgray 100%)',
  position: 'relative',
  overflow: 'hidden',

  '&:after': {
    content: '',
    position: 'absolute',
    width: '80px',
    height: '80px',
    left: 0,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100px',
    backgroundImage:
      'linear-gradient(-45deg, transparent 1%, transparent 50%, darkcyan 50%, darkcyan 100%)',
    backgroundPosition: '100px 0px',
  },
});

export { theme };
