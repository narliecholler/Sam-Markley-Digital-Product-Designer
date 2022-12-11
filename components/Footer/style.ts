import { styled } from '../../theme'

export const Avatar = styled("div", {
  "@bp1": {
    position: "absolute",
    bottom: "0",
    right: "20%",
  },
});

export const FooterWrapper = styled("footer", {
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  padding: "60px 20px",
  width: "100%",
  alignItems: "center",
  color: "#fff",
  backgroundColor: "#1D1D1D",

  "@bp1": {
    padding: "60px 100px",
  },
});

export const FooterTop = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "1.5rem",

  "& div:first-child": {
    display: "none",
  },

  "@bp1": {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: "2.5rem",
  },
});

export const FooterButton = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1.5rem",
  marginBottom: "1.5rem",

  "@bp1": {
    flexDirection: "row",
  },
});

export const FooterLogo = styled("p", {
  display: "none",
  fontSize: "clamp(1.5rem, 8vw, 2rem)",
  fontFamily: "ABCWhyteInktrap Bold",

  "@bp1": {
    display: "block",
  },
});

export const Border = styled("span", {
  width: "100%",
  height: "1px",
  background: "white",
  marginTop: "-6px",

  "@bp1": {
    display: "none",
  },
});

export const FooterBottom = styled("div", {
  "& .terms": {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "3rem",
    paddingTop: "1rem",
  },

  "@bp1": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #fff",
    paddingTop: "1.5rem",

    "& .terms": {
      padding: 0,
      flex: 4,
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "row",
      gap: "2rem",
      flexShrink: 0,
      alignItems: "center",
    },
  },

  // "& div": {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   paddingBottom: "2rem",
  // },
});

export const SocialIcons = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: "1rem",

  "&.icons_desktop": {
    display: "none",
  },

  "@bp1": {
    "&.icons_mobile": {
      display: "none",
    },
    "&.icons_desktop": {
      display: "flex",
      flex: 4,
      justifyContent: "flex-end",
    },
  },
});

export const FooterCopyright = styled("p", {
  width: "100%",
  textAlign: "center",
  color: "#F1F1F1",
  opacity: "0.5",
  paddingBottom: "2rem",

  "@bp1": {
    flex: 4,
    paddingBottom: 0,
  },
});