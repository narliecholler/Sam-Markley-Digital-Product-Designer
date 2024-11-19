import { styled } from 'styled-components';
import { theme } from '@/theme/theme';

export const FractionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  position: relative;
  top: 23%;

  p {
    line-height: 1rem;
    color: ${theme.colors.tertiary};
  }

  span {
    content: ;
    display: block;
    width: 10px;
    height: 1px;
    background-color: ${theme.colors.tertiary};
  }
`;
