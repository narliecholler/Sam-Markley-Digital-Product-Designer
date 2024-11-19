import { styled } from 'styled-components';
import { theme } from '@/lib/theme/theme';

export const ProgressBarWrapper = styled.div`
  width: '80px';
  height: '80px';
  display: 'flex';
  flex-wrap: 'wrap';
`;

export const Circle = styled.div`
  margin: '0 15px 15px 0';
  width: '80px';
  height: '80px';
  borderradius: '50%';
  background-image: 'radial-gradient(transparent 0%, transparent 60%, lightgray 60%, lightgray 100%)';
  position: 'relative';
  overflow: 'hidden';

  '&:after': {
    content: '';
    position: 'absolute';
    width: '80px';
    height: '80px';
    left: 0;
    backgroundrepeat: 'no-repeat';
    background-size: '100px';
    background-image: 'linear-gradient(-45deg, transparent 1%, transparent 50%, darkcyan 50%, darkcyan 100%)';
    background-position: '100px 0px';
  }
`;

export { theme };
