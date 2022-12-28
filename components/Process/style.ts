import { styled } from "../../theme";

export const ProcessWrapper = styled("div", {
  backgroundColor: "#fff",
  padding: "23px 50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "600px",
  margin: "0.5rem auto",

  "& h4": {
    fontFamily: "ABCWhyteInktrap Bold",
    fontSize: "2.1rem",
    paddingBottom: "1rem",
  },

  "& p": {
    fontFamily: "ABCMonumentGrotesk Regular",
    fontSize: "1rem",
    lineHeight: "26px",
    maxWidth: "350px",
  },
});

export const TextWrapper = styled("p", {
  fontFamily: "ABCMonumentGrotesk Regular",
  fontSize: "1rem",
  lineHeight: "26px",
  maxWidth: "350px",
});
