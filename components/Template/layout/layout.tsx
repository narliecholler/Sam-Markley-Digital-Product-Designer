import React, { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Container, HeaderWrapper } from './layout.style';

type LayoutProps = {
  className: string;
  children: ReactNode;
};

const Layout = ({ className, children }: LayoutProps) => (
  <Container>
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    <main className={className}>{children}</main>
    <Footer className={className} />
  </Container>
);

export default Layout;
