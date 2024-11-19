import { styled } from 'styled-components';
import { theme } from '@/theme/theme';

export const Container = styled.div`
  background-color: ${theme.colors.primary};
`;

/**
 * similar to section but sits as floating.
 */
export const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 99;

  /* @bp1: {
    height: 100px;
    position: fixed;
    padding: 0 5rem;
  } */
`;
