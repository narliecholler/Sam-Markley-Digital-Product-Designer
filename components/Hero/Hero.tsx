import Button from "@/components/Button";
import Image from "next/image";
import { MailIcon, OpenMailIcon, DownArrowIcon } from "public/assets/icons";
import React, { useEffect, useState } from "react";
import {
  HeroWrapper,
  HeroFooter,
  DesignerDetails,
  ScrollWrapper,
  MobileContact,
} from "./style";

const Hero = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight - 80);
    }
  }, []);

  return (
    <HeroWrapper style={{ height: height }}>
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
            {
              "Sam is a senior UX/UI designer based in London. He's had the privilege of influencing products used and loved by millions."
            }
          </p>
          <Button />
          <MobileContact>
            <Button />
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
