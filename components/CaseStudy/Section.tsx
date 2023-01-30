import { CaseStudySection, ProjectsHeading } from "./style";
import CaseStudy from "./CaseStudy";
import { caseStudies } from "./caseStudies";
import { useEffect, useRef } from "react";

const CSSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (typeof window !== "undefined") {
        const scroll = window.scrollY + window.innerHeight / 3;

        if (projectsRef.current) {
          if (
            projectsRef.current.getBoundingClientRect().top <= scroll &&
            projectsRef.current.getBoundingClientRect().top +
              projectsRef.current.getBoundingClientRect().height >
              scroll
          ) {
            projectsRef.current.classList.add("color-black");
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <CaseStudySection ref={projectsRef}>
      <ProjectsHeading>Selected Projects</ProjectsHeading>
      <ul>
        {caseStudies.map((i) => {
          return (
            <li key={`caseStudy_${i.id}`}>
              <CaseStudy
                title={i.company}
                id={i.id}
                images={i.collection}
                text={i.text}
              />
            </li>
          );
        })}
      </ul>
    </CaseStudySection>
  );
};

export default CSSection;
