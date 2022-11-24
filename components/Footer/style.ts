import { styled } from '../../theme'

export const FooterWrapper = styled("footer", {
  // width: "100%",
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
    gap: "2rem",
  },
});

export const FooterBottom = styled("div", {
  width: "100%",
  display: "flex",
  borderTop: "1px solid white",
  paddingTop: "10px",
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