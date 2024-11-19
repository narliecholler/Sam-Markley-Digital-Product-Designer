import { styled } from 'styled-components';
import { theme } from '@/theme/theme';

export const QuoteWrapper = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 16px;
  grid-column-start: span 12;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 1rem;

  & span {
    font-size: 30px;
  }

  /* @bp1: {
    grid-column-start: span 6;
    min-height: 85vh;
    padding: 40px;
  }; */
`;

export const QuoteHeader = styled.blockquote`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2.5rem;
  font-family: Krylon;
  font-size: clamp(1.5rem; 5vw; 3rem);
  line-height: normal;
  height: 100%;

  // & p: {
  //   font-size: 2px;
  //   line-height: 29px;
  // };
`;

export const QuoteFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 2rem;

  & p {
    &:first-child {
      font-family: Krylon;
      font-size: clamp(1.2rem; 5vw; 2.125rem);
      line-height: normal;
    }

    &:last-child {
      font-size: 24px;
    }
  }
`;
