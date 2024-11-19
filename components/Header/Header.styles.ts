import { styled } from 'styled-components';
import { theme } from '../progress-bar/style';

export const HeaderWrapper = styled.header`
  width: 100%;
  margin: auto;
  // margin: 0 5rem;
  max-width: 104rem;

  // @bp1: {
  //   padding-top: 1rem;
  // };

  & > div {
    height: 80px;
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-bottom: 1px solid ${theme.colors.primary};

    /* @bp1: {
      border-radius: 16px;
      padding: 0 40px;
      border-bottom: unset;
    }; */
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  flex-shrink: 0;
  z-index: 20;

  & a {
    text-decoration: none;
    color: inherit;
    font-size: clamp(1rem; 4vw; 1.5rem);
    font-family: Krylon;
    font-weight: 700;
    padding-right: 13px;
    margin-right: 13px;
    border-right: 1px solid #000000;
  }

  & > p {
    font-size: 12px;

    /* @bp1: {
      font-size: 16px;
    } */
  }
`;
