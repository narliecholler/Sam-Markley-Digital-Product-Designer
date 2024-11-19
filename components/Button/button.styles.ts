import Link from 'next/link';
import { styled } from 'styled-components';
import { theme } from '@/theme/theme';

const IconWrapper = styled.div`
  flex-shrink: 0;
`;

const ButtonWrapper = styled(Link)<{
  $fullWidth: boolean;
  $color: 'dark' | 'light';
}>`
  width: ${(props) => (props.$fullWidth ? '100%' : 'unset')};
  background-color: ${(props) =>
    props.$color === 'dark' ? theme.colors.primary : theme.colors.white};

  p {
    color: ${(props) =>
      props.$color === 'dark' ? theme.colors.primary : theme.colors.primary};
  }

  path {
    stroke: ${(props) =>
      props.$color === 'dark' ? theme.colors.white : theme.colors.primary};
  }

  &:hover path {
    stroke: ${theme.colors.primary};
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  gap: 8px;
  height: 3.2rem;
  padding: 12px 32px;
  cursor: pointer;
  border: 1px solid ${theme.colors.buttonBorder};
  border-radius: 1.5rem;
  background-size: 400%;
  overflow: hidden;
  width: fit-content;
  text-decoration: none;

  &::before: {
    content: '';
    height: inherit;
    position: absolute;
    top: -1px;
    left: 0;
    transform: scaleX(0);
    transformorigin: 0 50%;
    width: 100%;
    border-radius: inherit;
    border-color: transparent;
    background: linear-gradient(
      82.3deg; #95e7a4 -11.48%; #8fd8fa 34.24%; #cbbefa 74.58%; #fefefe 110.21%
    );
    transition: all 0.475s;
  }

  & p: {
    padding: 0;
    letter-spacing: 0.0125em;
    z-index: 1;
    position: relative;
    color: theme.colors.white;
  }

  &:hover: {
    & p: {
      color: theme.colors.primary;
    }
  }

  &:hover::before: {
    transform: scaleX(1);
  }
`;

export { IconWrapper, ButtonWrapper };
