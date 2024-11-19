import React, { useState, useEffect } from 'react';
import { menuItemList } from 'lib/constants';
import { Socials, EmailContact } from '@/components/socials';
import { Menu } from './menu-item';
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

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  // add no scroll to body when menu is open.
  useEffect(() => {
    if (open) {
      document?.querySelector('html')?.classList.add('menu-active');
    }

    return () => {
      document?.querySelector('html')?.classList.remove('menu-active');
    };
  }, [open]);

  return (
    <MobileMenuWrapper className={open ? 'active' : undefined}>
      <label htmlFor="burger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav key="open">
        <ul>
          <Menu items={menuItemList} mobileView />
        </ul>
        <div>
          <EmailContact iconColor="white" />
          <Socials />
        </div>
      </nav>
    </MobileMenuWrapper>
  );
};

export { DesktopMenu, MobileMenu };
