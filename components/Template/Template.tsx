import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type LayoutProps = {
  className: string;
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ className, children }) => (
  <>
    <Header className={className} />
    <main className={className}>{children}</main>
    <Footer className={className} />
  </>
);

export default Layout;
