import Button from "@/components/Button";
import Image from "next/image";
import { MailIcon, DownArrowIcon } from "public/assets/icons";
import {
  HeroWrapper,
  HeroFooter,
  DesignerDetails,
  ScrollWrapper,
  MobileContact,
} from "./style";

const Hero = () => {
  return (
    <HeroWrapper>
      <h1>
        <span>
          Defining the future <br />
        </span>{" "}
        through elegant product <br />
        design and brand identity.
      </h1>
      <HeroFooter>
        <DesignerDetails>
          <p>
            Sam is a senior UX/UI designer based in London. Hes had the
            privilege of influencing products used and loved by millions.
          </p>
          <Button icon={<MailIcon />} text="Contact" />

          <MobileContact>
            <Button icon={<MailIcon />} text="Contact" />
            <span></span>
          </MobileContact>
        </DesignerDetails>
        <ScrollWrapper>
          <p>Scroll down to learn more</p>
          <DownArrowIcon />
        </ScrollWrapper>
      </HeroFooter>
    </HeroWrapper>
  );
};

export default Hero;
