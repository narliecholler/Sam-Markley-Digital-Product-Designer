import Button from "@/components/Button";
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

const Footer = () => {
  const [icon, setIcon] = useState<React.ReactNode>(<MailIcon />);

  return (
    <FooterWrapper>
      <FooterTop>
        <FooterLogo>Sam Markley</FooterLogo>
        <FooterButton>
          <p>Always Growing. Always Learning.</p>
          <Button
            icon={icon}
            bgColor="white"
            text="Contact"
            onMouseEnter={() => setIcon(<OpenMailIcon />)}
            onMouseLeave={() => setIcon(<MailIcon />)}
          />
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
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <FooterCopyright>
          2022 Sam Markley. All rights reserved.
        </FooterCopyright>
        <SocialIcons className="icons_desktop">
          <LinkedInIcon />
          <DribbbleIcon />
          <InstagramIcon />
        </SocialIcons>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
