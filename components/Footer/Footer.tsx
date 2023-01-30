import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import {
  MailIcon,
  InstagramIcon,
  DribbbleIcon,
  LinkedInIcon,
  OpenMailIcon,
} from "public/assets/icons";
import { useState } from "react";
import {
  Avatar,
  FooterWrapper,
  FooterTop,
  FooterLogo,
  FooterBottom,
  FooterCopyright,
  SocialIcons,
  FooterButton,
  Border,
} from "./style";
import UseAnimations from "react-useanimations";
import instagram from "react-useanimations/lib/instagram";
import dribbble from "react-useanimations/lib/dribbble";
import linkedin from "react-useanimations/lib/linkedin";

const Footer = () => {
  const [icon, setIcon] = useState<React.ReactNode>(<MailIcon />);

  return (
    <FooterWrapper className="footer">
      <FooterTop>
        <FooterLogo href="/">Sam Markley</FooterLogo>
        <FooterButton>
          <p>Always Growing. Always Learning.</p>
          <Button />
        </FooterButton>
        <SocialIcons className="icons_mobile">
          <LinkedInIcon />
          <DribbbleIcon />
          <InstagramIcon />
        </SocialIcons>
        <Avatar>
          <Image
            alt="avatar"
            src="/assets/Sam-Avatar.png"
            width={200}
            height={200}
          />
        </Avatar>
        <Border />
      </FooterTop>
      <FooterBottom>
        <div className="terms">
          <Link href="/">Terms & Conditions</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
        <FooterCopyright>
          2023 Sam Markley. All rights reserved.
        </FooterCopyright>
        <SocialIcons className="icons_desktop">
          <Link href="https://www.linkedin.com/in/sammarkley" target="_blank">
            <UseAnimations animation={linkedin} size={32} strokeColor="#fff" />
          </Link>
          <Link href="https://dribbble.com/sammarkley" target="_blank">
            <UseAnimations animation={dribbble} size={32} strokeColor="#fff" />
          </Link>
          <Link href="https://www.instagram.com/sammarkley" target="_blank">
            <UseAnimations animation={instagram} size={32} strokeColor="#fff" />
          </Link>
        </SocialIcons>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
