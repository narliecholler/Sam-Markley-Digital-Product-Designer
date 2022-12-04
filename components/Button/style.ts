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
