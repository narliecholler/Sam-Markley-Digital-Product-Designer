import { styled } from '../../theme'

export const HeaderWrapper = styled("header", {
  height: "80px",
  color: "black",
  display: "flex",
  padding: "0 20px",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid black",
  backgroundColor: "#F9F9F9",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 10,

  "&.nav-mobile": {
    display: "none",
    position: "absolute",
    top: 0,
    right: 0,
    background: "black",
    height: "70px",
    width: "70px",
  },

  "@bp1": {
    justifyContent: "space-between",
  },

  "@bp2": {
    padding: "0 100px",
  },
});

export const LogoWrapper = styled("div", {
  fontSize: "1rem",
  lineHeight: "26px",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  zIndex: 20,

  "& a": {
    textDecoration: "none",
    color: "inherit",
    fontSize: "clamp(1rem, 4vw, 1.5rem)",
    fontFamily: "ABCWhyteVariable",
    fontWeight: 600,
    paddingRight: "13px",
    marginRight: "13px",
    borderRight: "1px solid #000000",
  },
});

export const NavWrapperDesktop = styled("nav", {
  width: "100%",
  alignItems: "center",
  display: "none",

  "& ul": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    width: "100%",
    listStyle: "none",
    gap: "1rem",

    "& .activer:after": {
      content: "",
      width: "2px",
      height: "2px",
      bacground: "black",
      borderRadius: "100%",
    },

    "& a": {
      fontFamily: "ABCMonumentGrotesk Medium",
      textDecoration: "none",
    },
  },

  "@bp1": {
    display: "flex",
    "& p": {
      display: "none",
    },
    "& ul": {
      justifyContent: "flex-end",
      gap: "2rem",
      "& a": {
        textDecoration: "none",
        color: "black",
        fontWeight: 700,
      },
    },
  },
});

export const NavWrapperMobile = styled("div", {
  "@bp1": {
    display: "none",
  },

  "& input": {
    position: "absolute",
    top: 0,
    right: 0,
    visibility: "hidden",
  },

  "& input + label": {
    position: "relative",
    display: "block",
    height: "20px",
    width: "15px",
    zIndex: 5,

    "& span": {
      position: "absolute",
      width: "100%",
      height: "2px",
      top: "50%",
      marginTop: "-1px",
      left: "0",
      display: "block",
      background: "black",
      transition: ".5s",
    },
    "& span:first-child": {
      top: "3px;",
    },
    "& span:last-child": {
      top: "16px",
    },
  },

  "& label": {
    "&:hover": {
      cursor: "pointer",
    },
  },

  "& input:checked + label": {
    "& span": {
      opacity: 0,
      top: "50%",
    },
    "& span:first-child": {
      opacity: 1,
      transform: "rotate(405deg)",
    },
    "& span:last-child": {
      opacity: 1,
      transform: "rotate(-405deg)",
    },
  },

  "& input:checked ~ nav": {
    height: "100%",
    transitionDelay: "0s",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    display: "block",
    "& ul": {
      display: "block",
      "& li": {
        opacity: 1,
        transitionDelay: ".5s",
      },
    },
  },

  "& input ~ nav": {
    backgroundColor: "#F9F9F9",
    zIndex: 3,
    transition: ".5s",
    transitionDelay: ".5s",
    overflow: "hidden",

    "& ul": {
      display: "none",
      textAlign: "center",
      position: "absolute",
      top: "35%",
      left: "20%",
      right: "20%",
      listStyle: "none",

      "& li": {
        opacity: 0,
        transition: ".5s",
        transitionDelay: "0s",

        "& a": {
          textDecoration: "none",
          textTransform: "uppercase",
          color: "$blackColor",
          fontWeight: 700,
          fontFamily: "sans-serif",
          display: "block",
          padding: "30px",
        },
      },
    },
  },
});

export const Hamburger = styled("div", {
  display: "block",
  position: "absolute",
  top: 0,
  right: 0,
  background: "black",
  height: "70px",
  width: "70px",

  "@bp1": {
    display: "none",
  },

  "& a": {
    position: "absolute",
    left: "18px",
    top: "22px",
    cursor: "pointer",
    padding: "10px 35px 16px 0px",

    "& span, & span::before, & span::after": {
      cursor: "pointer",
      borderRadius: "1px",
      height: "5px",
      width: "35px",
      background: "black",
      position: "absolute",
      display: "block",
      content: "",
      transition: " all 300ms ease-in-out",
    },

    "& span::before": {
      top: "-10px",
    },

    "& span:after": {
      bottom: "-10px",
    },

    "&.active": {
      "& span": {
        backgroundColor: "transparent",
        "&::before, &::after": {
          top: 0,
        },
        "&::before": {
          transform: "rotate(45deg)",
        },
        "&::after": {
          transform: "rotate(-45deg)",
        },
      },
    },
  },
});