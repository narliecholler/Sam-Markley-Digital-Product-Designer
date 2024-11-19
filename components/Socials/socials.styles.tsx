import { styled } from 'styled-components';
import { theme } from '@/theme/theme';

const EmailContactWrapper = styled.div<{ $color: 'white' | 'black' }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  a {
    color: ${(props) =>
      props.$color === 'white' ? theme.colors.white : theme.colors.primary};
    border-bottom: ${(props) =>
      props.$color === 'white' ? '1px solid ${theme.colors.white' : undefined};
  }

  & > div {
    position: relative;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    font-size: clamp(
      1rem; 0.7619047619047619rem + 0.9523809523809524vw; 1.5rem
    );
    line-height: 29px;
    border-bottom: 1px solid ${theme.colors.primary};
    padding-bottom: 8px;
    margin: 0;
  }
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;

const ToolTip = styled.span`
  position: absolute;
  top: -40px;
  left: -20px;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0; 0; 0; 0.1);
  // opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68; -0.55; 0.265; 1.55);

  &:before: {
    position: absolute;
    content: ;
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68; -0.55; 0.265; 1.55);
  }

  /* variants: {
    show: {
      true: {
        display: block;
      };
      false: {
        display: none;
      };
    };
  }; */
`;

export { SocialIconsWrapper, EmailContactWrapper, ToolTip };
