import Link from "next/link";
import { styled } from "../../theme";

export const Avatar = styled("div", {
  "@bp1": {
    position: "absolute",
    bottom: "-10px",
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
  backgroundColor: "#121212",
  color: "#F1F1F1",
  overflow: "hidden",

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
    marginBottom: 0,
  },
});

export const FooterLogo = styled(Link, {
  display: "none",
  fontSize: "clamp(1.5rem, 8vw, 2rem)",
  fontFamily: "ABCWhyteVariable",
  textDecoration: "none",
  color: "inherit",

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

  "& a": {
    textDecoration: "none",
    color: "inherit",
  },

  "@bp1": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #F1F1F1",
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
  opacity: "0.5",
  paddingBottom: "2rem",

  "@bp1": {
    flex: 4,
    paddingBottom: 0,
  },
});
