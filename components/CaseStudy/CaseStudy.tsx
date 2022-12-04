import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CaseStudyWrapper, Heading, CaseStudyDescription } from "./style";

interface CaseStudyProps {
  title: string;
  text: string;
  id: string;
}

const CaseStudy = ({ title, text, id }: CaseStudyProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  let imgEl: Element | null, textWrapEl: Element | null, textEl: Element | null;

  const onMouseEnter = () => {
    console.log("here1", imgEl);
    console.log("here1", textEl);
    console.log("here1", textWrapEl);
    gsap.killTweensOf([imgEl, textEl]);

    const mouseEnterTimeline = gsap.timeline();

    mouseEnterTimeline
      .addLabel("start", 0)
      .to(
        imgEl,
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
  };

  const onMouseLeave = () => {
    console.log("here2");
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

  useEffect(() => {
    imgEl = document.querySelector(`.row_${id} .cell--images > .coll__img`);
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
  }, [rowRef]);

  return (
    <CaseStudyWrapper className={`row_${id}`} ref={rowRef}>
      <div className="cell cell--text">
        <Heading className="cell__title oh">
          <span className="oh__inner">{title}</span>
        </Heading>
      </div>
      <CaseStudyDescription className="cell cell--images">
        <div className="coll__img">{text}</div>
      </CaseStudyDescription>
    </CaseStudyWrapper>
  );
};

export default CaseStudy;
