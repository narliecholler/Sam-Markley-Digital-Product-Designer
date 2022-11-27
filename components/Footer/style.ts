import { styled } from '../../theme'

export const FooterWrapper = styled("footer", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  backgroundColor: "#1D1D1D",
  padding: "20px",

  "@bp1": {
    padding: "84px 100px",
  },
});

export const FooterTop = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",

  "& div": {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    paddingBottom: "80px",
  },
});

export const FooterLogo = styled("p", {
  fontSize: "clamp(1.5rem, 8vw, 2rem)",
  fontFamily: "ABCWhyteInktrap Bold",
});

export const FooterBottom = styled("div", {
  width: "100%",
  display: "flex",
  borderTop: "1px solid white",
  paddingTop: "20px",
  fontSize: "12px",

  "& div": {
    flex: 1,
  },

  "& div:first-child": {
    display: "flex",
    gap: "1rem",
  },

  "& div:nth-child(2)": {
    textAlign: "center",
  },

  "& div:last-child": {
    textAlign: "right",
  },
});

export const FooterCopyright = styled("p", {
  color: "#F1F1F1",
  fontSize: "12px",
});