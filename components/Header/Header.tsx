import Link from 'next/link';
import { DesktopMenu, MobileMenu } from 'components/Menu';
import { HeaderWrapper, LogoWrapper } from './Header.styles';

const Header = ({ className }: { className: string }) => (
  <HeaderWrapper className={className}>
    <LogoWrapper>
      <Link href="/">Sam Markley</Link>
      <p>Digital Product Designer</p>
    </LogoWrapper>
    <DesktopMenu />
    <MobileMenu />
  </HeaderWrapper>
);

export default Header;
