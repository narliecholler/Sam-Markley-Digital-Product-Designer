import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Layout from '@/components/Template';
import { Analytics } from '@vercel/analytics/react';
// '/assets/fonts/ABCWhyteInktrapVariable-Trial.woff2',
const myFont = localFont({
  src: [
    {
      path: '../public/fonts/ABCWhyteInktrapVariable-Trial.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ABCMonumentGrotesk-Light-Trial.woff2',
      weight: '400',
      style: 'normal',
    },
    // {
    //   path: '../public/fonts/ABCMonumentGrotesk-Medium-Trial.woff2',
    //   weight: '400',
    //   style: 'normal',
    // },
    // {
    //   path: '../public/fonts/ABCMonumentGrotesk-Regular-Trial.woff2',
    //   weight: '400',
    //   style: 'normal',
    // },
  ],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout className={myFont.className}>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
