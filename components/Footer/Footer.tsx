import Button from "@/components/Button";
import Image from "next/image";
import {
  MailIcon,
  InstagramIcon,
  DribbbleIcon,
  LinkedInIcon,
} from "public/assets/icons";
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
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterLogo>Sam Markley</FooterLogo>
        <FooterButton>
          <p>Always Growing. Always Learning.</p>
          <Button icon={<MailIcon />} bgColor="white" text="contact" />
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
            layout="fixed"
            width="200px"
            height="200px"
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
