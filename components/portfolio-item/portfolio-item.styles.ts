import { styled } from 'styled-components';
import { theme } from '@/theme/theme';

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-areas: '
    main
  ';
  margin-bottom: 32vh;
  color: ${theme.colors.white};
  position: relative;
`;

export const Content = styled.div<{ $layout?: boolean; $animation?: number }>`
  grid-area: main;
  display: grid;
  place-items: center;
  line-height: 1.2;
  grid-template-areas: ${(props) =>
    props.$layout
      ? "'title-up title-down' 'img img' 'text text'"
      : "'content'"};
  grid-template-columns: ${(props) => (props.$layout ? '1fr 1fr' : undefined)};
  gap: ${(props) => (props.$layout ? '1rem' : undefined)};
  position: relative;

  &:first-child {
    height: 100vh;
  }

  & .content-text {
    grid-area: text;
    text-transform: uppercase;
    margin: 0;
    opacity: 0.5;
  }

  & svg {
    grid-area: img;
    max-width: 100%;
    height: auto;
  }

  // TODO: update for the variant here.
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p<{ $direction: boolean }>`
  padding-top: 0.3em;
  line-height: 0.525;
  font-size: 2rem;
  position: relative;
  z-index: 100;
  text-indent: -0.1em;
  grid-area: ${(props) => (props.$direction ? 'title-up' : 'title-down')};
  justify-self: ${(props) => (props.$direction ? 'start' : 'start')};
  align-self: ${(props) => (props.$direction ? 'start' : 'end')};
`;
