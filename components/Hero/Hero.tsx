import Button from "@/components/Button";
import Mail from "public/icons/mail.svg";
import { HeroWrapper, HeroFooter } from "./style";

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
        <div>
          <p>
            Sam is a senior UX/UI designer based in London. Hes had the
            privilege of influencing products used and loved by millions.
          </p>
          <Button icon={Mail} text="contact" />
        </div>
        <div>
          <p>Scroll down to learn more</p>
        </div>
      </HeroFooter>
    </HeroWrapper>
  );
};

export default Hero;
