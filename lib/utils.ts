import localFont from 'next/font/local';
// eslint-disable-next-line camelcase
import { IBM_Plex_Sans } from 'next/font/google';

export const IBMPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  preload: true,
});

export const Krylon = localFont({
  variable: '--font-krylon',
  src: '../public/fonts/Krylon-Regular.woff2',
  style: 'normal',
});
