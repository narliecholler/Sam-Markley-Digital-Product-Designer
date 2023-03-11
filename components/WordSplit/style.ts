import { styled } from '@/theme/theme';

const SplitWordHeading = styled('h3', {
  width: '100%',
  textAlign: 'center',
  position: 'relative',
  '& span': {
    fontFamily: 'ABCWhyteVariable',
    fontWeight: 500,
    fontSize: 'clamp(2rem, 8vw, 3rem)',
  },
});

export default SplitWordHeading;
