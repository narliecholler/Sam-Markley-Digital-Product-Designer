import { styled } from "@/theme/theme";

export const SplitWordHeading = styled("h3", {
  width: "100%",
  textAlign: "center",
  position: "relative",
  "& span": {
    fontFamily: "ABCWhyteVariable",
    fontWeight: 500,
    fontSize: "clamp(2rem, 8vw, 3rem)",
  },
});
