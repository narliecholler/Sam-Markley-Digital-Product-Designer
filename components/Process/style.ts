import { styled } from "../../theme";

export const ProcessWrapper = styled("div", {
  backgroundColor: "#fff",
  padding: "23px 50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0.5rem auto",
  position: "relative",
  textAlign: "center",

  "& h3": {
    fontFamily: "ABCWhyteInktrap Regular",
    fontSize: "clamp(1.5rem, 5vw, 2.125rem)",
    paddingBottom: "1rem",
  },

  "& p": {
    // fontFamily: "ABCMonumentGrotesk Regular",
    fontSize: "1rem",
    lineHeight: "26px",
    maxWidth: "350px",
  },
});

export const TextWrapper = styled("p", {
  // fontFamily: "ABCMonumentGrotesk Regular",
  fontSize: "1rem",
  lineHeight: "26px",
  maxWidth: "350px",
});
