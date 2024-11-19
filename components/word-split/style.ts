import { styled } from 'styled-components';

const SplitWordHeading = styled.h3`
  width: '100%';
  text-align: 'center';
  position: 'relative';

  '& span': {
    font-family: 'IBMPlexMonoRegular';
    font-weight: 500;
    font-size: 'clamp(2rem, 8vw, 3rem)';
  }
`;

export default SplitWordHeading;
