import { styled } from 'styled-components';

export const ImgWrapper = styled.div`
  overflow-wrap: break-word;
`;

export const CaseStudyWrapper = styled.li`
  text-decoration: none;
  list-style-type: none;

  &:last-child {
    .animatedborder {
      display: none;
    }
  }
`;

export const CaseStudyInner = styled.div`
  z-index: 1;
  display: grid;
  position: relative;
  cursor: pointer;
  min-height: 100px;
  grid-template-columns: auto 1fr;
  grid-column-gap: 5vw;
  align-items: center;
  transition: background-color 0.3s ease-out; border-color 0.3s ease-out;
  color: #fff;

  /* @bp1: {
    min-height: 200px;
    padding: 40px 0;
    grid-template-columns: 1fr 1fr;
  }; */

  .description: {
    display: none;

    /* @bp1: {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }; */
  };
`;

export const LogoWrapper = styled.span``;

export const CaseStudyDescription = styled.div`
  .cell--images {
    display: none;
    align-content: center;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    place-content: center end;
    grid-gap: 1.5rem;
    justify-content: end;
    margin-left: auto;
    // padding: "70px 0";
  }

  .cell__img {
    width: 106px;
    height: 106px;
    // display: "grid";

    position: relative;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    will-change: transform; opacity;
    opacity: 0;
    display: none;
  }

  /* @bp1: {
    & .cell__img: {
      display: grid;
    };
  }; */

  .cell__img-inner {
    background-size: cover;
    background-position: 50% 50%;
    aspect-ratio: 1;
    width: 100%;
    border-radius: calc(var(1vw) / 3);
  }
`;

export const MobileIcon = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translate(0; -50%);

  /* @bp1: {
    display: none;
  } */
`;

export const AnimatedLine = styled.div<{ $userHoserved: boolean }>`
  background: ${(props) => (props.$userHoserved ? '#fff' : '#6c6c6c')};
  height: ${(props) => (props.$userHoserved ? '2px' : '1px')};
  width: 100%;
`;

export const Heading = styled.h3<{
  $brand: 'microsoft' | 'inhaus' | 'gamdom' | 'stuartlochhead' | 'opal';
}>`
  position: relative;
  overflow: hidden;

  span {
    font-size: clamp(2rem; 8vw; 3rem);
    line-height: 58px;
    font-family: Krylon;
    will-change: transform;
    display: inline-block;
  }

  .cell__title--switch {
    ${LogoWrapper} {
      content: ${(props) =>
        props.$brand
          ? `url(/assets/portfolio/images/${props.$brand}/${props.$brand}-logo.svg)`
          : undefined};
    }
  }
`;
