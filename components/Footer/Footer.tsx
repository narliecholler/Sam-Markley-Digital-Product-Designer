import { FooterWrapper, FooterTop, FooterBottom } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <p>Sam Markley</p>
        <div>
          <p>Always Growing. Always Learning.</p>
          <button>contact</button>
        </div>
      </FooterTop>
      <FooterBottom>
        <div>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>2022 Sam Markley. All rights reserved.</div>
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
