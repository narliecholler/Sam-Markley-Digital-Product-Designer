import Link from "next/link";
import { HeaderWrapper, LogoWrapper, NavWrapper } from "./style";

const menuList = ["Portfolio", "About", "Contact"];

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <p>Sam Markley</p>
        <p>UI / UX Designer</p>
      </LogoWrapper>
      <NavWrapper>
        <p>Sam Markley</p>
        <ul>
          {menuList.map((i, index) => {
            return (
              <li key={`${i}_${index}`}>
                <Link href="/">{i}</Link>
              </li>
            );
          })}
        </ul>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
