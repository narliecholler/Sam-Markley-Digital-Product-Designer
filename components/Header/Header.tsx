import Link from "next/link";
import { HeaderWrapper, LogoWrapper, NavWrapper } from "./style";

const menuList = ["Portfolio", "About", "Contact"];

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <div>Sam Markley</div>
        <div>UI / UX Designer</div>
      </LogoWrapper>
      <NavWrapper>
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
