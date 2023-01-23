/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import type { CSSHeadingVariants } from "./style";

interface CaseStudyProps {
  title: string;
  text?: string;
  id: string;
  images: string[];
  logo?: string;
}

interface ElementTypes {
  imagesWrapper: Element[] | [];
  images: Element[] | [];
  titleWrap: Element | null;
  title: Element | null;
  description: Element | null;
}

const CaseStudy = ({ title, id, images, text }: CaseStudyProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<ElementTypes[]>([
    {
      imagesWrapper: [],
      images: [],
      titleWrap: null,
      title: null,
      description: null,
    },
  ]);

  const onMouseEnter = () => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.killTweensOf([
        rows[0].imagesWrapper,
        rows[0].description,
        rows[0].images,
        rows[0].title,
      ]);

      const mouseEnterTimeline = gsap.timeline();
      mouseEnterTimeline
        .to(rows[0].description, {
          duration: 0.1,
          ease: "power3",
          xPercent: 0,
          display: "none",
          stagger: -0.035,
        })
        .addLabel("start", 0)
        .to(rows[0].imagesWrapper, {
          duration: 0,
          display: "grid",
        })
        .to(
          rows[0].images,
          {
            delay: 0.2,
            duration: 0.8,
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
        .to(
          rows[0].title,
          {
            duration: 0.1,
            ease: "power1.in",
            yPercent: -100,
            onComplete: () =>
              rows[0].titleWrap?.classList.add("cell__title--switch"),
          },
          "start"
        )
        .to(
          rows[0].title,
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
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.killTweensOf([
        rows[0].imagesWrapper,
        rows[0].description,
        rows[0].images,
        rows[0].title,
      ]);

      const onMouseLeaveTimeline = gsap.timeline();

      onMouseLeaveTimeline
        .addLabel("start")
        .to(rows[0].imagesWrapper, {
          duration: 0,
          display: "none",
        })
        .to(rows[0].description, {
          delay: 0.2,
          ease: "power4",
          display: "flex",
        })
        .to(
          rows[0].images,
          {
            duration: 0.4,
            ease: "power4",
            opacity: 0,
            scale: 0.8,
          },
          "start"
        )
        .to(
          rows[0].title,
          {
            duration: 0.1,
            ease: "power1.in",
            yPercent: -100,
            onComplete: () =>
              rows[0].titleWrap?.classList.remove("cell__title--switch"),
          },
          "start"
        )
        .to(
          rows[0].title,
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

  useEffect(() => {
    setRows([
      {
        imagesWrapper: Array.from(
          document.querySelectorAll(`.row_${id} .cell--images`)
        ),
        images: Array.from(
          document.querySelectorAll(`.row_${id} .cell--images > .cell__img`)
        ),

        title: document.querySelector(
          `.row_${id} .cell--text > .cell__title > .oh__inner`
        ),
        titleWrap: document.querySelector(
          `.row_${id} .cell--text > .cell__title`
        ),
        description: document.querySelector(`.row_${id} .description`),
      },
    ]);

    const row = rowRef.current;

    if (row && rows[0].images.length) {
      row.addEventListener("mouseenter", onMouseEnter);
      row.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      row?.removeEventListener("mouseenter", onMouseEnter);
      row?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [rowRef.current]);

  return (
    <CaseStudyWrapper className={`row_${id}`} ref={rowRef}>
      <div className="cell cell--text">
        <Heading
          brand={id as CSSHeadingVariants["brand"]}
          className="cell__title oh"
        >
          <LogoWrapper className="oh__inner">{title}</LogoWrapper>
        </Heading>
      </div>
      <div className="description">
        <p>{text}</p>
      </div>
      <MobileIcon className="mobileIcon">
        <ArrowRightIcon />
      </MobileIcon>
      <CaseStudyDescription className="cell cell--images">
        {images.map((i, index) => {
          return (
            <div className="cell__img" key={`${id}_${index}`}>
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
