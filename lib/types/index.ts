import { ReactNode } from 'react';

export type CompanyProps = {
  hero: string;
  logo: string;
};

/**
 * menu heade props
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
