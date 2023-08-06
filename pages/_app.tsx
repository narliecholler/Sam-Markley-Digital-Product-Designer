import type { AppProps } from 'next/app';
import { Layout } from '@/components/Template';
import { Analytics } from '@vercel/analytics/react';
import { IBMPlexMono, Krylon } from '../lib';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${IBMPlexMono.variable} ${Krylon.variable}`}>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
