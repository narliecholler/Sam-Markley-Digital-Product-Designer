import { styled } from 'styled-components';
import { theme } from '@/lib/theme/theme';

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 8px;
  padding: 12px 32px;
  color: #fff;
  cursor: pointer;
  background-color: theme.colors.secondary;
  border: 1px solid ${theme.colors.buttonBorder};
  border-radius: 25px;
  background-position: 100% 0;
  background-size: 300% 100%;
  background-image: linear-gradient(
    to left; transparent 50%; #95e7a4 10%; #8fd8fa 35%; #cbbefa 66%; #fefefe 94%
  );
  transition: all 1s ease-in-out;

  & p {
    padding: 0;
    font-family: IBMPlexMonoRegular;
    letter-spacing: 0.0125em;
  }

  /* variants: {
    fullWidth: {
      true: {
        width: 100%;
      };
    };
  }; */

  &:hover {
    background-position: 0 0;
    border-radius: 25px;
    border-color: theme.colors.primary;
  }
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
`;
