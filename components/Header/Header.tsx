import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from 'components/Icon';
import { Socials } from '@/components/Socials';
import {
  HeaderWrapper,
  LogoWrapper,
  NavWrapperDesktop,
  NavWrapperMobile,
  MobileMenuSocials,
} from './Header.styles';

const menuList = [
  {
    title: 'Home',
    description: 'Browse an overview of my skillset.',
  },
  {
    title: 'About',
    description: 'My experience and testimonials',
  },
  {
    title: 'Portfolio',
    description: 'From finance technology to ice baths.',
  },
  {
    title: 'Contact',
    description: 'Enquire about your ideas',
  },
];

const Header = () => {
  const pathname = usePathname();

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
          <p>Digital Product Designer</p>
        </LogoWrapper>
        <NavWrapperDesktop>
          <ul>
            {menuList.slice(1).map((i, index) => (
              <li key={`${i}_${index}`}>
                <Link
                  href={`${i.title.toLowerCase()}`}
                  className={
                    pathname === `/${i.title.toLowerCase()}`
                      ? 'active'
                      : undefined
                  }
                >
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </NavWrapperDesktop>
        <NavWrapperMobile className="mobile-header">
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
                  <div>
                    <Link href={`/${i.title.toLowerCase}`}>{i.title}</Link>
                    <Icon type="arrowRight" />
                  </div>
                  <p>{i.description}</p>
                </li>
              ))}
              <MobileMenuSocials>
                <p>contact@sammarkley.com</p>
                <Socials />
              </MobileMenuSocials>
            </ul>
          </nav>
        </NavWrapperMobile>
      </HeaderWrapper>
    </>
  );
};

export default Header;
