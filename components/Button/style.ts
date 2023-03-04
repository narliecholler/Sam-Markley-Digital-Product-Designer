import { styled } from "@/theme/index";

const ButtonWrapper = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  padding: "12px 32px",
  cursor: "pointer",
  transition: "all 0.2s",
  // fontFamily: "ABCWhyteVariable",
  fontWeight: 400,
  background: "#1D1D1D",
  border: "1px solid #E0E0E0",
  borderRadius: "157px",
  color: "#F1F1F1",
  width: "165px",

  "&:hover": {
    "& p": {
      fontWeight: 700,
      transition: "0.3s",
    },
  },

  "& p": {
    padding: 0,
    fontFamily: "ABCWhyteVariable",
    fontWeight: 400,
  },
});

const IconWrapper = styled("div", {
  flexShrink: 0,
});

export { IconWrapper, ButtonWrapper };
