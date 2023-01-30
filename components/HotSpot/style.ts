import { styled, keyframes } from "@/theme/theme";

const pulse = keyframes({
  "0%": {
    boxShadow: "0px 0px 0px 0px rgba(216,32,43,0.4)",
  },
  "70%": {
    boxShadow: "0px 0px 0px 15px rgba(216,32,43, 0)",
  },
  "100%": {
    boxShadow: "0px 0px 0px 0px rgba(216,32,43, 0)",
  },
});

const HotSpotInner = styled("div", {
  pointerEvents: "initial",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "50%",
  left: "50%",
});

const HotSpotCircle = styled("span", {
  display: "inline-block",
  position: "relative",
  margin: "0 auto",
  width: "50px",
  height: "50px",

  "& i": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "2px solid #d8202b",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: " 100px",
    boxShadow: "0 0 0 100px rgba(purple, 0.4)",
    transition: "all 0.3s ease-in-out",
    animation: `${pulse} 1.4s infinite`,

    "&:hover": {
      animation: "none",
      cursor: "pointer",
    },
  },

  "& span": {
    zIndex: -10,
    display: "none",
    width: "1px",
    height: "250px",
    background: "black",
    position: "relative",
    left: "-35px",
    top: "-141px",
    transform: "scale(0.6) rotate(-55deg)",
    transition: "all 2s ease-in-out",
  },
});

const HotSpotTextWrapper = styled("div", {
  pointerEvents: "none",
  display: "none",
  position: "absolute",
  width: "350px",
  height: "auto",
  bottom: 0,
  // top: "380px",
  // left: "-70px",
  fontSize: "1rem",

  "@bp1": {
    pointerEvents: "none",
    display: "none",
    position: "absolute",
    width: "350px",
    height: "auto",
    top: "-180px",
    left: "-450px",
    fontSize: "1rem",
  },

  "& article": {
    "& h4": {
      fontFamily: "ABCWhyteInktrap Bold",
      fontSize: "2rem",
      paddingBottom: "1rem",
    },
    "& p": {
      fontSize: "1rem",
      opacity: 0.8,
    },
  },
});

const HotSpotWrapper = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 3,

  "&.is-active": {
    [`& ${HotSpotTextWrapper}`]: {
      display: "block",
    },
    [`& ${HotSpotCircle}`]: {
      "& span": {
        display: "block",
        transition: "all 3s ease-in-out",
      },
    },
  },
});

export { HotSpotWrapper, HotSpotInner, HotSpotCircle, HotSpotTextWrapper };
