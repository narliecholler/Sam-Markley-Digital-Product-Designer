import { ReactNode } from 'react';
import type * as Stitches from '@stitches/react';
import { Heading } from '@/components/case-study/card.style';

export type CSSHeadingVariants = Stitches.VariantProps<typeof Heading>;

/**
 * menu header props
 */
export type MenuItem = {
  title: string;
  description: string;
  id: number;
  pathname: string;
  isMobileView?: boolean;
};

export type MenuProps = {
  items: MenuItem[];
  mobileView?: boolean;
};

/**
 * contact form types
 */
export type Inputs = {
  fullName: string;
  email: string;
  number: string;
  help: string;
};

export type Input = {
  label: string;
  icon: ReactNode;
  registerName: keyof Inputs;
  required: boolean;
};
