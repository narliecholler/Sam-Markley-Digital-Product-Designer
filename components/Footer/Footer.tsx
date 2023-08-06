import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '@/components/Button';
import { Socials } from '@/components/Socials';
import {
  FooterWrapper,
  FooterTop,
  FooterLogo,
  FooterBottom,
  FooterTerms,
  FooterCopyright,
  FooterSocials,
  FooterButton,
  Border,
} from './Footer.styles';

const Footer = ({ className }: { className: string }) => {
  const pathname = usePathname();

  useEffect(() => {
    // hide if contact desktop.
    if (pathname === '/contact') {
      document.querySelector('.footer')?.classList.add('hideFooter');
    }

    return () => {
      document.querySelector('.footer')?.classList.remove('hideFooter');
    };
  }, [pathname]);

  return (
    <FooterWrapper className={`footer ${className}`}>
      <FooterTop>
        <FooterLogo href="/">Sam Markley</FooterLogo>
        <FooterButton>
          <p>Always Growing. Always Learning.</p>
          <Button text="Contact" stroke="light" />
        </FooterButton>
      </FooterTop>
      <Border id="desktop-border" />
      <FooterBottom>
        <FooterTerms>
          <Border />
          <div>
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
          <FooterCopyright id="mobile-copyright">
            Ⓒ 2023 Sam Markley. All rights reserved
          </FooterCopyright>
        </FooterTerms>
        <FooterCopyright id="desktop-copyright">
          Ⓒ 2023 Sam Markley. All rights reserved
        </FooterCopyright>
        <FooterSocials>
          <div>
            <Image
              alt="avatar"
              src="/assets/Sam-Avatar.png"
              width={200}
              height={200}
            />
          </div>
          <Socials />
        </FooterSocials>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
