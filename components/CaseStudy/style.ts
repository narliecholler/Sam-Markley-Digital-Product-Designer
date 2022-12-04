import { styled } from "@/theme/index";

const CaseStudyWrapper = styled("div", {
  cursor: "pointer",
  dispay: "flex",
  alignItems: "flex-start",
  color: "#fff",
  borderBottom: "1px solid white",
  padding: "32px 0",
  transition: "background-color 0.3s ease-out, border-color 0.3s ease-out",

  "@bp1": {
    padding: "64px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    "& p": {
      maxWidth: "35%",
      display: "flex",
      alignItems: "flex-end",
    },
  },
});

const CaseStudyDescription = styled("div", {
  // opacity: "0",
  paddingTop: "1rem",
  "@bp1": {
    paddingTop: 0,
    maxWidth: "40%",
  },

  "& div": {
    opacity: "0",
    overflowWrap: "break-word",
  },
});

const Heading = styled("h3", {
  position: "relative",
  overflow: "hidden",
  "&.cell__title--switch": {
    "& span": {
      fontFamily: "ABCWhyteInktrap Bold",
      fontSize: "1.5rem",
    },
  },

  "& span": {
    fontFamily: "ABCWhyteInktrap Regular",
    fontSize: "clamp(2rem, 8vw, 3rem)",
    lineHeight: "58px",
    willChange: "transform",
    display: "inline-block",
  },
});

export { CaseStudyWrapper, Heading, CaseStudyDescription };
