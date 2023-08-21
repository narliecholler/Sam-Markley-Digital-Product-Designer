import Link from 'next/link';
import { useRouter } from 'next/router';
import { DesktopMenu, MobileMenu } from 'components/Menu';
import { IBMPlexSans } from '@/lib/utils';
import { HeaderWrapper, LogoWrapper } from './Header.styles';

const Header = () => {
  const router = useRouter();
  return (
    <HeaderWrapper className={IBMPlexSans.variable} key={router.asPath}>
      <div>
        <LogoWrapper>
          <Link href="/">Sam Markley</Link>
          <p>Digital Product Designer</p>
        </LogoWrapper>
        <DesktopMenu />
        <MobileMenu />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
