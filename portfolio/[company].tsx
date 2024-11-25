import { useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import gsap from 'gsap';
import Head from 'next/head';
import Image from 'next/image';
import { getAllPostSlugs, getPostBySlug } from '@/lib/index';

const Portfolio: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const img = document.querySelector('.img');
      const imgInner = document.querySelector('.imgInner');
      gsap
        .timeline({
          defaults: {
            duration: 1,
            ease: 'power3.inOut',
          },
        })
        .to(
          [img, imgInner],
          {
            startAt: { y: (pos) => (pos ? '101%' : '-101%') },
            y: '0%',
            opacity: 1,
          },
          'content',
        );
    }
  }, []);

  return (
    <>
      <Head>
        <title>Sam Markley - Portfolio</title>
        <meta
          name="description"
          content="Sam Markley, UI/UX Designer portfolio page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        style={{
          paddingTop: '2rem',
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        <div
          ref={ref}
          style={{
            height: '70vh',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/assets/portfolio/images/microsoft/portfolio.png"
            alt="microsfot header"
            fill
            priority
            className="img"
            style={{
              overflow: 'hidden',
              transform: 'translateY(-101%)',
              pointerEvents: 'none',
              willChange: 'transform',
            }}
          />
          <Image
            src="/assets/portfolio/images/microsoft/MicrosoftLogo.svg"
            alt="logo"
            priority
            width={400}
            height={106}
            className="imgInner"
            style={{
              transform: 'translateY(101%)',
              willChange: 'transform',
              lineHeight: '44px',
              opacity: 0,
            }}
          />
        </div>
        <div
          id="details"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '2rem 1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: '35%',
            }}
          >
            <p>Microsoft x Amazon</p>
            <p>
              Re-design the entire AMS storefront for the launch of Microsofts
              new Surface range.
            </p>
          </div>
          <div
            style={{
              width: '30%',
            }}
          >
            <p>Client: Microsfot</p>
            <p>Client: Microsfot</p>
            <p>Client: Microsfot</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

// export async function getStaticPaths() {
//   const {
//     posts: { edges },
//   } = await getAllPostSlugs();

//   const allPosts = edges;

//   // Get the paths we want to pre-render based on posts
//   const paths = allPosts.map(({ node: { slug } }) => ({
//     params: { company: slug },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: 'blocking' } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: 'blocking' };
// }

// export async function getStaticProps({ params = {} }) {
//   const { company: slug } = params;

//   const { post } = await getPostBySlug(slug, { slug });

//   return {
//     props: { post }, // will be passed to the page component as props
//   };
// }
