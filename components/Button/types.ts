export interface ButtonProps {
  icon?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  text: string;
  bgColor?: string | any;
}
