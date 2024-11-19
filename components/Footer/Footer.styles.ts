import Link from 'next/link';
import { styled } from 'styled-components';

export const Avatar = styled.div`
  position: absolute;

  // @bp1: {
  //   position: absolute;
  //   bottom: -10px;
  //   right: 20%;
  // };
`;

export const FooterWrapper = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 60px 20px;
  width: 100%;
  align-items: center;
  background-color: #121212;
  color: #f1f1f1;
  overflow: hidden;

  /* @bp1: {
    padding: 60px 100px;
  }; */

  .hideFooter {
    display: none;
  }
`;

export const FooterTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* @bp1: {
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 4.5rem;
  }; */
`;

export const FooterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  /* @bp1: {
    flex-direction: row;
    margin-bottom: 0;
  }; */
`;

export const FooterLogo = styled(Link)`
  display: none;
  font-size: clamp(1.5rem; 8vw; 2rem);
  font-family: Krylon;
  text-decoration: none;
  color: inherit;

  /* @bp1: {
    display: block;
  }; */
`;

export const Border = styled.span`
  width: 100%;
  height: 1px;
  background-color: white;
  opacity: 0.3;
  margin-top: -6px;
  margin-bottom: 2rem;

  /* @bp1: {
    display: none;

    &#desktop-border: {
      display: none;
    };
  }; */

  #desktop-border {
    display: none;
  }
`;

export const FooterTerms = styled.div`
  display: flex;
  flex-direction: column;

  & > div:nth-child(2) {
    display: flex;
    gap: 2rem;
    flex: 1;
    margin-bottom: 2rem;
    justify-content: space-evenly;

    /* @bp1: {
      margin-bottom: 0;
      justify-content: unset;
    } */

    & a {
      font-size: 0.75rem;
      text-decoration: none;
      color: inherit;
    }
  }

  /* @bp1: {
    flex-direction: row;
    flex: 1;
  } */
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;

  & > div:nth-child() {
    display: flex;
    justify-content: space-between;
    flex: 1;
    column-gap: 2rem;

    & a {
      font-size: 0.75rem;
      text-decoration: none;
      color: inherit;
    }
  }

  @bp1: {
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    border-top: 1px solid #f1f1f1;
    padding-top: 1.5rem;
  }
`;

export const FooterSocials = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column-reverse;

  /* @bp1: {
    flex: 1;
    flex-direction: row;
  } */

  & > div:first-child {
    /* @bp1: {
      position: absolute;
      left: 0;
    } */
  }

  & > div:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }
`;

export const FooterCopyright = styled.p`
  flex: 1;
  text-align: center;
  opacity: 0.5;
  font-size: 0.75rem;

  &#mobile-copyright {
    display: block;
  }

  &#desktop-copyright {
    display: none;
  }

  /* @bp1: {
    &#mobile-copyright: {
      display: none;
    }

    &#desktop-copyright: {
      display: block;
    }
  } */
`;
