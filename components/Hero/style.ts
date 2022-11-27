import { styled } from "@/theme/theme";

const HeroWrapper = styled("section", {
  fontFamily: "ABCMonumentGrotesk Regular",
  paddingTop: "120px",
  paddingBottom: "75px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "& h1": {
    fontSize: "24px",
    "& span": {
      fontFamily: "ABCWhyteInktrap Bold",

      "@bp1": {
        fontSize: "80px",
      },
    },

    "@bp1": {
      fontSize: "80px",
      fontFamily: "ABCWhyteInktrap Regular",
      lineHeight: "80px",
    },
  },
});

const HeroFooter = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "flex-end",
  paddingBottom: "85px",
  borderTop: "1px solid black",

  "& div:first-child": {
    padding: "0 16px",
    position: "absolute",
    left: "104px",
    top: "-10px",
    background: "white",
  },

  "& div:last-child": {
    paddingTop: "14px",
  },

  "& p": {
    maxWidth: "380px",
    flexShrink: 0,
    paddingBottom: "11px",
  },
});

export { HeroWrapper, HeroFooter };
