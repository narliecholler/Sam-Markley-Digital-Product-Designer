import { styled } from '../../theme'

export const HeaderWrapper = styled("header", {
  height: "80px",
  color: "black",
  display: "flex",
  padding: "0 20px",
  alignItems: "center",
  borderBottom: "1px solid black",
  backgroundColor: "#F9F9F9",

  "@bp1": {
    padding: "0 100px",
    justifyContent: "space-between",
  },
});

export const LogoWrapper = styled("div", {
  flexShrink: 0,
  alignItems: "center",
  display: "none",

  "@bp1": {
    display: "flex",
  },

  "& p:first-child": {
    fontFamily: "ABCWhyteInktrap Bold",
    fontSize: "24px",
    lineHeight: "26p",
    flexShrink: 0,
    borderRight: "1px solid black",
    paddingRight: "15px",
    marginRight: "1rem",
    "@bp1": {},
  },

  "& p:last-child": {
    display: "none",
    fontFamily: "ABCMonumentGrotesk Regular",
    "@bp1": {
      display: "block",
    },
  },
});

export const NavWrapper = styled("nav", {
  width: "100%",
  fontFamily: "ABCMonumentGrotesk Bold",
  display: "flex",
  alignItems: "center",

  "& p": {
    flexShrink: 0,
    fontFamily: "ABCWhyteInktrap Bold",
    fontSize: "1.2rem",
  },

  "& ul": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    width: "100%",
    listStyle: "none",
    gap: "1rem",

    "& a": {
      textDecoration: "none",
    },
  },

  "@bp1": {
    "& p": {
      display: "none",
    },
    "& ul": {
      justifyContent: "flex-end",
      gap: "2rem",
      "& a": {
        textDecoration: "none",
        color: "black",
      },
    },
  },
});