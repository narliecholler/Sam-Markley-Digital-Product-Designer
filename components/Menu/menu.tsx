import React from 'react';
import { menuItemList } from 'lib/constants';
import { Socials, EmailContact } from '@/components/Socials';
import { Menu } from './menuItem';
import { DesktopMenuWrapper, MobileMenuWrapper } from './menu.styles';

const DesktopMenu = () => {
  const filterMobileItems = menuItemList.filter(
    (item) => Boolean(!item.isMobileView),
    // eslint-disable-next-line function-paren-newline
  );

  return (
    <DesktopMenuWrapper>
      <ul>
        <Menu items={filterMobileItems} />
      </ul>
    </DesktopMenuWrapper>
  );
};

const MobileMenu = () => (
  <MobileMenuWrapper>
    <input id="burger" type="checkbox" />

    <label htmlFor="burger">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <nav>
      <ul>
        <Menu items={menuItemList} mobileView />
      </ul>
      <div>
        <EmailContact />
        <Socials contrast={true} />
      </div>
    </nav>
  </MobileMenuWrapper>
);

export { DesktopMenu, MobileMenu };
