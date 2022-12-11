import { useState } from "react";
import Link from "next/link";
// import { stack as Menu } from "react-burger-menu";
import {
  HeaderWrapper,
  LogoWrapper,
  NavWrapperDesktop,
  NavWrapperMobile,
} from "./style";

const menuList = ["Portfolio", "About", "Contact"];

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <p>Sam Markley</p>
        <p>UI / UX Designer</p>
      </LogoWrapper>
      <NavWrapperDesktop>
        <ul>
          {menuList.map((i, index) => {
            return (
              <li key={`${i}_${index}`}>
                <Link href="/">{i}</Link>
              </li>
            );
          })}
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
            {menuList.map((i, index) => {
              return (
                <li key={`${i}_${index}`}>
                  <Link href="/">{i}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </NavWrapperMobile>
    </HeaderWrapper>
  );
};

export default Header;
