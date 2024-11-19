import { styled } from 'styled-components';
import { theme } from '@/theme/theme';

export const DesktopMenuWrapper = styled.nav`
  width: auto;
  align-items: center;
  display: none;

  & ul: {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 100%;
    list-style: none;
    gap: 1rem;

    & .active:after: {
      content: ;
      display: block;
      position: absolute;
      bottom: 20%;
      width: 6px;
      height: 6px;
      background: theme.colors.primary;
      border-radius: 100%;
    }

    & a: {
      font-family: IBMPlexMonoRegular;
      font-weight: 700;
      text-decoration: none;
      display: flex;
      justify-content: center;
    }
  }

  /* @bp1: {
    display: flex;
    & ul: {
      justify-content: flex-end;
      gap: 2rem;
      & a: {
        text-decoration: none;
        color: black;
      };
    };
  }; */
`;

export const MobileMenuWrapper = styled.div`
  /* @bp1: {
    display: none;
  }; */

  & label {
    position: relative;
    display: block;
    height: 20px;
    width: 15px;
    z-index: 5;

    &:hover {
      cursor: pointer;
    }

    & span {
      position: absolute;
      width: 100%;
      height: 2px;
      top: 50%;
      margin-top: -1px;
      left: 0;
      display: block;
      background: black;
      transition: 0.5s;
    }

    & span:first-child {
      top: 3px;
    }

    & span:last-child {
      top: 16px;
    }
  }

  &.active label {
    & span {
      opacity: 0;
      top: 50%;
    }

    & span:first-child {
      opacity: 1;
      transform: rotate(405deg);
    }

    & span:last-child {
      opacity: 1;
      transform: rotate(-405deg);
    }
  }

  &.active nav {
    height: calc(100vh - 80px);
    transition-delay: 0s;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // social section.
    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 40px;
    }

    & ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 40px 30px;

      & li {
        opacity: 1;
        transition-delay: 0.5s;
      }
    }
  }

  & nav {
    background-color: ${theme.colors.primary};
    z-index: 3;
    transition: 0.5s;
    transition-delay: 0.5s;
    overflow: scroll;

    // social section.
    & > div {
      display: none;
    }

    & ul {
      display: none;
      list-style: none;

      & li {
        opacity: 0;
        transition: 0.5s;
        transition-delay: 0s;
        border-bottom: 1px solid ${theme.colors.white};

        &:first-child {
          a: {
            padding-top: 0;
          }
        }

        & a {
          font-family: IBMPlexMonoRegular;
          font-weight: 500;
          font-size: 34px;
          text-decoration: none;
          color: $blackColor;
          display: block;
          padding: 16px 0;

          & div: {
            display: flex;
            justify-content: space-between;
            align-items: center;

            & p: {
              font-family: Krylon;
              font-size: 34px;
              color: ${theme.colors.primary};
              background: linear-gradient(
                137deg; #95e7a4 0%; #8fd8fa 35.42%; #cbbefa 66.67%; #fefefe
                  94.27%
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }

          & p {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }
`;
