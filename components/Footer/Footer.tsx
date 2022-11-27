import Button from "@/components/Button";
import {
  FooterWrapper,
  FooterTop,
  FooterLogo,
  FooterBottom,
  FooterCopyright,
} from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterLogo>Sam Markley</FooterLogo>
        <div>
          <p>Always Growing. Always Learning.</p>
          <Button text="contact" />
        </div>
      </FooterTop>
      <FooterBottom>
        <div>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <FooterCopyright>
          2022 Sam Markley. All rights reserved.
        </FooterCopyright>
        <div>
          <span>in</span>
          <span>twit</span>
          <span>Li</span>
        </div>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
