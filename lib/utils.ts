import localFont from 'next/font/local';
// eslint-disable-next-line camelcase
import { IBM_Plex_Mono } from 'next/font/google';

export const IBMPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
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
