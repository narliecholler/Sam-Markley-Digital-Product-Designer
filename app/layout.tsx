import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import React, { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme/theme';
import {
  Container,
  HeaderWrapper,
} from '../components/template/layout/layout.style';
import { IBMPlexSans, Krylon } from '../lib';

type LayoutProps = {
  className: string;
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

const RootLayout = ({ className, children }: LayoutProps) => (
  <html className={`${IBMPlexSans.variable} ${Krylon.variable}`}>
    <Analytics />
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <body className={className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
      <Footer className={className} />
    </Container>
  </html>
);

export default RootLayout;
