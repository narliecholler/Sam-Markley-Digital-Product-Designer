import { ReactNode } from 'react';

export interface ButtonProps {
  icon?: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  text: string;
  bgColor?: string | any;
}
