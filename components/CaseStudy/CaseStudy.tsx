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
  images: Element[] | [];
  titleWrap: Element | null;
  title: Element | null;
}

const CaseStudy = ({ title, id, images }: CaseStudyProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<ElementTypes[]>([
    {
      images: [],
      titleWrap: null,
      title: null,
    },
  ]);

  // console.log("rows", rows);
  const onMouseEnter = () => {
    const row = rowRef.current;
    const id = row?.getAttribute("id");

    gsap.killTweensOf([rows[0].images, rows[0].title]);

    const mouseEnterTimeline = gsap.timeline();

    // imgEl?.map((i) => {
    mouseEnterTimeline
      .addLabel("start", 0)
      .to(
        rows[0].images,
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
      .set(rows[0].title, { transformOrigin: "0% 50%" }, "start")
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
    // });
  };

  const onMouseLeave = () => {
    gsap.killTweensOf([rows[0].images, rows[0].title]);

    const onMouseLeaveTimeline = gsap.timeline();

    onMouseLeaveTimeline
      .addLabel("start")
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
  };

  useLayoutEffect(() => {
    setRows([
      {
        images: Array.from(
          document.querySelectorAll(`.row_${id} .cell--images > .cell__img`)
        ),

        title: document.querySelector(
          `.row_${id} .cell--text > .cell__title > .oh__inner`
        ),
        titleWrap: document.querySelector(
          `.row_${id} .cell--text > .cell__title`
        ),
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
      <CaseStudyDescription className="cell cell--images">
        <MobileIcon>
          <ArrowRightIcon />
        </MobileIcon>
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
