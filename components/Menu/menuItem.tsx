import React from 'react';
import Link from 'next/link';

import { Icon } from 'components/Icon';
import { MenuProps } from 'lib/types';
import { useRouter } from 'next/router';

const MenuItem = ({
  title,
  description,
  path,
  mobileView = false,
}: {
  title: string;
  description: string;
  path: string;
  mobileView?: boolean;
}) => {
  const { asPath } = useRouter();

  return (
    <li key={title}>
      <Link
        href={`/${title.toLocaleLowerCase()}`}
        className={asPath === `/${title.toLowerCase()}` ? 'active' : undefined}
      >
        <div>
          <p>{title}</p>
          {mobileView && <Icon type="arrowRight" />}
        </div>
        {mobileView && <p>{description}</p>}
      </Link>
    </li>
  );
};

const Menu = ({ items, mobileView }: MenuProps) => (
  <>
    {items.map(({ title, description, id, pathname }) => (
      <MenuItem
        title={title}
        description={description}
        key={id}
        path={pathname}
        mobileView={mobileView}
      />
    ))}
  </>
);

export { MenuItem, Menu };
