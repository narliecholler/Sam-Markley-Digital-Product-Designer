import { styled } from "@/theme/index";

const ButtonWrapper = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "14px",
  border: "1px solid #E0E0E0",
  borderRadius: "25px",
  color: "white",
  padding: "14px 32px",
  cursor: "pointer",
  transition: "all 0.2s",
  fontFamily: "ABCMonumentGrotesk Regular",

  "&:hover": {
    color: "black",
    background: "#FFFFFF",
    border: "1px solid #000000",
  },

  variants: {
    bgColor: {
      white: {
        backgroundColor: "#fff",
        color: "#000",
      },
      black: {
        backgroundColor: "#1D1D1D",
        color: "#fff",
      },
    },
  },
});

export default ButtonWrapper;
