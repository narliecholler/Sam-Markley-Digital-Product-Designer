/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRightIcon } from "public/assets/icons";
import {
  CaseStudyWrapper,
  Heading,
  CaseStudyDescription,
  LogoWrapper,
  ImgWrapper,
  MobileIcon,
} from "./style";

interface CaseStudyProps {
  title: string;
  text?: string;
  id: string;
  images: string[];
  logo?: string;
}

const CaseStudy = ({ title, id, images }: CaseStudyProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  let imgEl: Element[] | null,
    textWrapEl: Element | null,
    textEl: Element | null;

  const onMouseEnter = () => {
    gsap.killTweensOf([imgEl, textEl]);

    const mouseEnterTimeline = gsap.timeline();

    imgEl?.map((i) => {
      console.log(",", i);
      return mouseEnterTimeline
        .addLabel("start", 0)
        .to(
          i,
          {
            duration: 0.4,
            ease: "power3",
            startAt: {
              scale: 0.8,
              xPercent: 20,
            },
            scale: 1,
            xPercent: 0,
            opacity: 1,
            stagger: -0.035,
          },
          "start"
        )
        .set(textEl, { transformOrigin: "0% 50%" }, "start")
        .to(
          textEl,
          {
            duration: 0.1,
            ease: "power1.in",
            yPercent: -100,
            onComplete: () => textWrapEl?.classList.add("cell__title--switch"),
          },
          "start"
        )
        .to(
          textEl,
          {
            duration: 0.5,
            ease: "expo",
            startAt: {
              yPercent: 100,
              rotation: 15,
            },
            yPercent: 0,
            rotation: 0,
          },
          "start+=0.1"
        );
    });
  };

  const onMouseLeave = () => {
    gsap.killTweensOf([imgEl, textEl]);

    const onMouseLeaveTimeline = gsap.timeline();
    onMouseLeaveTimeline
      .addLabel("start")
      .to(
        imgEl,
        {
          duration: 0.4,
          ease: "power4",
          opacity: 0,
          scale: 0.8,
        },
        "start"
      )
      .to(
        textEl,
        {
          duration: 0.1,
          ease: "power1.in",
          yPercent: -100,
          onComplete: () => textWrapEl?.classList.remove("cell__title--switch"),
        },
        "start"
      )
      .to(
        textEl,
        {
          duration: 0.5,
          ease: "expo",
          startAt: {
            yPercent: 100,
            rotation: 15,
          },
          yPercent: 0,
          rotation: 0,
        },
        "start+=0.1"
      );
  };

  useLayoutEffect(() => {
    imgEl = [
      ...Array.from(
        document.querySelectorAll(`.row_${id} .cell--images > .cell__img`)
      ),
    ];

    textEl = document.querySelector(
      `.row_${id} .cell--text > .cell__title > .oh__inner`
    );
    textWrapEl = document.querySelector(
      `.row_${id} .cell--text > .cell__title`
    );

    const row = rowRef.current;

    if (row) {
      row.addEventListener("mouseenter", onMouseEnter);
      row.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      row?.removeEventListener("mouseenter", onMouseEnter);
      row?.removeEventListener("mouseleave", onMouseLeave);
    };
  });

  return (
    <CaseStudyWrapper className={`row_${id}`} ref={rowRef}>
      <div className="cell cell--text">
        <Heading brand={id} className="cell__title oh">
          <LogoWrapper className="oh__inner">{title}</LogoWrapper>
        </Heading>
      </div>
      <CaseStudyDescription className="cell cell--images">
        <MobileIcon>
          <ArrowRightIcon />
        </MobileIcon>
        {images.map((i) => {
          return (
            <div className="cell__img" key={id}>
              <ImgWrapper
                className="cell__img-inner"
                style={{
                  backgroundImage: `url(${i})`,
                }}
              ></ImgWrapper>
            </div>
          );
        })}
      </CaseStudyDescription>
    </CaseStudyWrapper>
  );
};

export default CaseStudy;
