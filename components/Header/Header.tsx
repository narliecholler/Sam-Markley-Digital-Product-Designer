import Link from 'next/link';
import { useEffect, useRef } from 'react';
import {
  HeaderWrapper,
  LogoWrapper,
  NavWrapperDesktop,
  NavWrapperMobile,
} from './style';

const menuList = ['Portfolio', 'About', 'Contact'];

const Header = () => {
  const intersectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (intersectRef.current) {
      // add class to header when using ref div to recognise when not on screen after scroll.
      const observer = new IntersectionObserver(([entry]) => {
        document
          ?.querySelector('header')
          ?.classList.toggle('active', !entry.isIntersecting);
      });

      observer.observe(intersectRef.current);
    }
  }, [intersectRef]);

  return (
    <>
      <div ref={intersectRef}></div>
      <HeaderWrapper>
        <LogoWrapper>
          <Link href="/">Sam Markley</Link>
          <p>UI / UX Designer</p>
        </LogoWrapper>
        <NavWrapperDesktop>
          <ul>
            {menuList.map((i, index) => (
              <li key={`${i}_${index}`}>
                <Link href={`${i.toLowerCase()}`}>{i}</Link>
              </li>
            ))}
          </ul>
        </NavWrapperDesktop>
        <NavWrapperMobile>
          <input id="burger" type="checkbox" />

          <label htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav>
            <ul>
              {menuList.map((i, index) => (
                <li key={`${i}_${index}`}>
                  <Link href={`/${i.toLowerCase}`}>{i}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </NavWrapperMobile>
      </HeaderWrapper>
    </>
  );
};

export default Header;
