import { styled } from "@/theme/index";
import type * as Stitches from "@stitches/react";

const ImgWrapper = styled("div", {
  // opacity: "0",
  overflowWrap: "break-word",
});

export const CaseStudySection = styled("section", {
  backgroundColor: "#121212",
  padding: "3rem 20px",

  "@bp1": {
    padding: "100px 100px",
  },

  "& ul": {
    textDecoration: "none",
    listStyle: "none",
    "& li:last-child": {
      "& div": {
        borderBottom: "none",
      },
    },
  },
});

const CaseStudyWrapper = styled("div", {
  zIndex: 1,
  // color: var(--color-text),
  display: "grid",
  position: "relative",
  cursor: "pointer",
  // gridTemplateRows: "5vw",

  gridTemplateColumns: "auto 1fr",
  gridColumnGap: "5vw",
  alignItems: "center",
  borderBottom: "1px solid white",
  transition: "background-color 0.3s ease-out, border-color 0.3s ease-out",

  // "&:hover": {
  //   [`& ${ImgWrapper}`]: {
  //     opacity: 1,
  //   },
  // },
  // cursor: "pointer",
  // dispay: "flex",
  // alignItems: "flex-start",
  color: "#fff",
  // borderBottom: "1px solid white",
  // transition: "background-color 0.3s ease-out, border-color 0.3s ease-out",

  // "& div:first-child": {
  //   minHeight: "65px",
  // },

  // "@bp1": {
  //   padding: "64px 0",
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",

  //   "& p": {
  //     maxWidth: "35%",
  //     display: "flex",
  //     alignItems: "flex-end",
  //   },
  // },

  // variants: {
  //   brand: {
  //     microsoft: {
  //       '& div:first-child': {
  //         '&: span'
  //       }
  //       backgroundImage: "url(/assets/portfolio/microsoft.png)",
  //     },
  //   },
  // },
});

const LogoWrapper = styled("span", {
  // width: "150px",
  // height: "50px",
  // variants: {
  //   brand: {
  //     microsoft: {
  //       width: "150px",
  //       height: "50px",
  //       backgroundImage: "url(/assets/portfolio/microsoft.png)",
  //     },
  //   },
  // },
});

const CaseStudyDescription = styled("div", {
  // opacity: "0",
  // paddingTop: "1rem",
  // "@bp1": {
  //   paddingTop: 0,
  //   maxWidth: "40%",
  // },

  "&.cell--images": {
    display: "grid",
    alignContent: "center",
    gridAutoColumns: "auto",
    gridAutoFlow: "column",
    placeContent: "center end",
    gridGap: "1.5rem",
    justifyContent: "end",
    marginLeft: "auto",
    padding: "40px 0",
  },

  "& .cell__img": {
    width: "106px",
    height: "106px",
    // display: "grid",

    position: "relative",
    gridTemplateColumns: "100%",
    gridTemplateRows: "auto auto",
    willChange: "transform, opacity",
    opacity: 0,
    display: "none",
  },

  "@bp1": {
    "& .cell__img": {
      display: "grid",
    },
  },

  "& .cell__img-inner": {
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    aspectRatio: 1,
    width: "100%",
    borderRadius: "calc(var(1vw) / 3)",
  },

  // "& div": {
  //   opacity: "0",
  //   overflowWrap: "break-word",
  // },
});

const Heading = styled("h3", {
  position: "relative",
  overflow: "hidden",

  variants: {
    brand: {
      microsoft: {
        "&.cell__title--switch": {
          [`& ${LogoWrapper}`]: {
            content: "url(/assets/portfolio/images/microsoft/microsoft.svg)",
          },
        },
      },
      inhaus: {
        "&.cell__title--switch": {
          [`& ${LogoWrapper}`]: {
            content: "url(/assets/portfolio/images/inhaus/inhaus.svg)",
          },
        },
      },
      gamdom: {
        "&.cell__title--switch": {
          [`& ${LogoWrapper}`]: {
            content: "url(/assets/portfolio/images/gamdom/gamdom.svg)",
          },
        },
      },
      stuartlochhead: {
        "&.cell__title--switch": {
          [`& ${LogoWrapper}`]: {
            content:
              "url(/assets/portfolio/images/stuartlochhead/stuartlochhead.svg)",
          },
        },
      },
      opalunderwriting: {
        "&.cell__title--switch": {
          [`& ${LogoWrapper}`]: {
            content: "url(/assets/portfolio/images/opal/opalunderwriting.svg)",
          },
        },
      },
    },
  },

  "& span": {
    fontFamily: "ABCWhyteInktrap Regular",
    fontSize: "clamp(2rem, 8vw, 3rem)",
    lineHeight: "58px",
    willChange: "transform",
    display: "inline-block",
  },
});

export type CSSHeadingVariants = Stitches.VariantProps<typeof Heading>;

const MobileIcon = styled("div", {
  position: "absolute",
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  transform: "translate(0, -50%)",

  "@bp1": {
    display: "none",
  },
});

export {
  CaseStudyWrapper,
  LogoWrapper,
  ImgWrapper,
  Heading,
  CaseStudyDescription,
  MobileIcon,
};
