// import localFont from "@next/font/local";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";

// const primaryFont = localFont({
//   src: [
//     {
//       path: "../fonts/ABCWhyteInktrapVariable-Trial.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../fonts/ABCWhyteInktrapVariable-Trial.ttf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "../fonts/ABCWhyteInktrapVariable-Trial.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../fonts/ABCWhyteInktrapVariable-Trial.tt",
//       weight: "700",
//       style: "italic",
//     },
//   ],
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
