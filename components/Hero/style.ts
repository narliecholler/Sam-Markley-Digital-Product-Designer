import { styled } from "@/theme/theme";

const HeroWrapper = styled("section", {
  position: "relative",
  fontFamily: "ABCMonumentGrotesk Regular",
  paddingTop: "56px",
  paddingBottom: "75px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#F9F9F9",

  "@bp1": {
    paddingTop: "120px",
  },

  "& h1": {
    lineHeight: "3rem",
    fontFamily: "ABCWhyteInktrap Regular",
    fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
    "& br": {
      display: "none",
    },
    "& span": {
      fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
      lineHeight: "47px",
      fontFamily: "ABCWhyteInktrap Bold",

      "@bp1": {
        lineHeight: "5rem",
        "& br": {
          display: "block",
        },
      },
    },

    "@bp1": {
      lineHeight: "5rem",

      "& br": {
        display: "block",
      },
    },
  },
});

const HeroFooter = styled("div", {
  position: "relative",
  fontSize: "1rem",
  lineHeight: "26px",
  gap: "1rem",
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,

  "& button": {
    maxWidth: "160px",
  },

  "@bp1": {
    flexDirection: "row",
    "&::before": {
      content: "",
      width: "10%",
      height: "1px",
      background: "black",
      marginTop: "12px",
    },

    "&::after": {
      content: "",
      width: "100%",
      height: "1px",
      background: "black",
      marginTop: "12px",
    },
  },
});

const DesignerDetails = styled("div", {
  "@bp1": {
    maxWidth: "34%",
    "& p": {
      paddingBottom: "1rem",
    },
    // display: "flex",
  },

  "& button": {
    display: "none",

    "@bp1": {
      display: "flex",
    },
  },
});

const MobileContact = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  paddingTop: "1rem",

  "& button": {
    display: "flex",
  },

  "& span": {
    display: "block",
    width: "100%",
    height: "1px",
    background: "#000",
  },

  "@bp1": {
    display: "none",
  },
});

const ScrollWrapper = styled("div", {
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  // gap: "1rem",
  display: "none",

  "& p": {
    paddingBottom: 0,
  },

  "@bp1": {
    display: "flex",
    gap: "1rem",
    position: "absolute",
    right: 0,
    top: "1rem",
  },
});

export {
  HeroWrapper,
  HeroFooter,
  ScrollWrapper,
  DesignerDetails,
  MobileContact,
};