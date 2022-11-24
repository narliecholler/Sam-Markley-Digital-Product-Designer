import { styled } from '../../theme'

export const HeaderWrapper = styled("header", {
  height: "80px",
  color: "black",
  display: "flex",
  padding: "0 20px",
  alignItems: "center",
  borderBottom: "1px solid black",

  "@bp1": {
    padding: "0 100px",
    justifyContent: "space-between",
  },

  "& ul": {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    "& a": {
      textDecoration: "none",
    },
  },
});

export const LogoWrapper = styled("div", {
  display: "flex",
  flexShrink: 0,

  "& div:first-child": {
    flexShrink: 0,
    borderRight: "1px solid black",
    paddingRight: "15px",
    marginRight: "1rem",
    "@bp1": {},
  },

  "& div:last-child": {
    display: "none",
    "@bp1": {
      display: "block",
    },
  },
});

export const NavWrapper = styled("nav", {
  width: "100%",
});